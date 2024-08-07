import requests
from django.shortcuts import redirect
import json

# MUST be secret
CLIENT_ID = '6b13df7a40b7e2fa088f2ed918d693dc'

def getMALUserList(username):
    global CLIENT_ID

    url = "https://api.myanimelist.net/v2/users/" + username + "/animelist?limit=1000&status=watching&nsfw=true&fields=list_status,id,title,alternative_titles,mean,rank,popularity,media_type,status,my_list_status,num_episodes,broadcast,average_episode_duration,start_date,end_date,start_season"
    headers = {"X-MAL-CLIENT-ID": CLIENT_ID}
    response = requests.get(url, headers=headers)

    if response is not None and response.status_code == 200:
        data = response.json()
        return data
    else:
        return redirect("/MyErrorList/" + username + "/" + str(response.status_code))


def getALUserListByMALId(mal_list):
    mal_ids = []
    page = 1
    responses = []
    anilist = []

    for anime in mal_list['data']:
        # for anime in mal_list:
        mal_ids.append(anime['node']['id'])

    # Here we define our query as a multi-line string
    query = '''
    query Media($page: Int, $perPage: Int, $type: MediaType, $sort: [MediaSort], $idMal_in: [Int]) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(type: $type, sort: $sort, idMal_in: $idMal_in) {
                idMal
                id
                title {
                    romaji
                    english
                    native
                }
                synonyms
                startDate {
                    year
                    month
                    day
                }
                nextAiringEpisode {
                    timeUntilAiring
                    episode
                }
            }
        }
    }
    '''

    # Define our query variables and values that will be used in the query request
    variables = {
        'page': page,
        'perPage': 50,
        'type': "ANIME",
        'sort': ["START_DATE"],
        'idMal_in': mal_ids
    }

    url = 'https://graphql.anilist.co'

    # Make the HTTP Api request
    response = requests.post(url, json={'query': query, 'variables': variables}).json()
    responses.append(response)

    while(responses[-1]['data']['Page']['pageInfo']['hasNextPage']):
        page += 1

        variables = {
            'page': page,
            'perPage': 50,
            'type': "ANIME",
            'sort': ["START_DATE"],
            'idMal_in': mal_ids
        }
        
        response = requests.post(url, json={'query': query, 'variables': variables}).json()
        responses.append(response)
    
    for resp in responses:
        for anime in resp['data']['Page']['media']:
            anilist.append(anime)
    
    return anilist


def getALUserList(username):

    # Here we define our query as a multi-line string
    query = '''
    query UserAnimeList($userName: String, $status_in: [MediaListStatus]) {
        MediaListCollection(userName: $userName, type: ANIME, status_in: $status_in) {
            lists {
                name
                status
                entries {
                    ...mediaListEntry
                }
            }
        }
    }

    fragment mediaListEntry on MediaList {
        id
        mediaId
        status
        progress
        media {
            idMal
            title {
                romaji
                english
                native
            }
            synonyms
            coverImage {
                extraLarge
            }
            status
            episodes
            duration
            season
            seasonYear
            nextAiringEpisode {
                id
                timeUntilAiring
                episode
            }
            startDate {
                year
                month
                day
            }
            endDate {
                year
                month
                day
            }
        }
    }
    '''

    # Define our query variables and values that will be used in the query request
    variables = {
        "userName": username,
        "status_in": ["CURRENT"]
    }

    url = 'https://graphql.anilist.co'

    # Make the HTTP Api request
    response = requests.post(url, json={'query': query, 'variables': variables}).json()
    
    return response