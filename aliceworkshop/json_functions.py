from datetime import *
from django.shortcuts import redirect

# const JSON_TEST_UNIFIED = [
#     {
#         "id": 1,
#         "id_al": 1,
#         "url": "",
#         "title": "anime name",
#         "alternative_titles": [
#             "",
#             "",
#             ""
#         ],
#         "picture": ".jpg",
#         "status": "currently_airing",
#         "num_episodes": 12,
#         "broadcast": {
#             "day_of_the_week": "wednesday",
#             "start_time": "23:00",
#             "next_airing_episode": null,
#             "time_until_airing": ""
#         },
#         "average_episode_duration": 1800,
#         "start_season": {"year": 2023, "season": "summer"}
#         "start_date": "2023-04-12",
#         "end_date": "2023-04-12",
#         "list_status": {
#             "status": "watching",
#             "score": 0,
#             "num_episodes_watched": 1,
#         }
#     },
# ];


def createJSONByMalList(mal_list, al_list):
    list = []

    for mal_anime in mal_list['data']:
        al_anime = [item for item in al_list if item['idMal'] == mal_anime['node']['id']]
        if len(al_anime) > 0:
            al_anime = al_anime[0]
        else:
            al_anime = {}

        # al_anime = next(anime for anime in al_list if anime["idMal"] == mal_anime['node']['id'] )

        anime = {}
        anime['id'] = mal_anime['node']['id']
        anime['id_al'] = al_anime["id"] if 'id' in al_anime else ''

        anime['url'] = "https://myanimelist.net/anime/" + str(mal_anime['node']['id'])

        anime['title'] = mal_anime['node']['title']
        anime['alternative_titles'] = []
        anime['alternative_titles'].append(mal_anime['node']['alternative_titles']['en'])
        anime['alternative_titles'].append(mal_anime['node']['alternative_titles']['ja'])
        anime['alternative_titles'].extend(mal_anime['node']['alternative_titles']['synonyms'])
        anime['alternative_titles'].append(al_anime['title']['romaji'] if 'title' in al_anime else '')
        anime['alternative_titles'].append(al_anime['title']['english'] if 'title' in al_anime else '')
        anime['alternative_titles'].append(al_anime['title']['native'] if 'title' in al_anime else '')
        anime['alternative_titles'].extend(al_anime['synonyms'] if 'synonyms' in al_anime else '')

        anime['picture'] = mal_anime['node']['main_picture']['medium']

        anime['status'] = mal_anime['node']['status']

        anime['num_episodes'] = mal_anime['node']['num_episodes']

        anime['broadcast'] = {'day_of_the_week': '', 'start_time': '', 'next_airing_episode': ''}

        if 'broadcast' in mal_anime['node']:
            anime['broadcast']['day_of_the_week'] = mal_anime['node']['broadcast']['day_of_the_week'] if 'day_of_the_week' in mal_anime['node']['broadcast'] else ''
            anime['broadcast']['start_time'] = mal_anime['node']['broadcast']['start_time'] if 'start_time' in mal_anime['node']['broadcast'] else ''

        if 'nextAiringEpisode' in al_anime and al_anime['nextAiringEpisode'] is not None:
            anime['broadcast']['time_until_airing'] = al_anime["nextAiringEpisode"]['timeUntilAiring'] if 'timeUntilAiring' in al_anime["nextAiringEpisode"] else ''
            anime['broadcast']['next_airing_episode'] = al_anime["nextAiringEpisode"]['episode'] if 'episode' in al_anime["nextAiringEpisode"] else ''
            

        anime['average_episode_duration'] = mal_anime['node']['average_episode_duration']

        anime['start_season'] = { 'year': 0, 'season': '' }

        if 'start_season' in mal_anime['node']:
            anime['start_season']['year'] = mal_anime['node']['start_season']['year'] if 'year' in mal_anime['node']['start_season'] else ''
            anime['start_season']['season'] = mal_anime['node']['start_season']['season'] if 'season' in mal_anime['node']['start_season'] else ''

        anime['start_date'] = mal_anime['node']['start_date'] if 'start_date' in mal_anime['node'] else ''
        anime['end_date'] = mal_anime['node']['end_date'] if 'end_date' in mal_anime['node'] else ''

        anime['list_status'] = { 'status': '', 'num_episodes_watched': ''}
        anime['list_status']['status'] = mal_anime['list_status']['status']
        anime['list_status']['num_episodes_watched'] = mal_anime['list_status']['num_episodes_watched']

        list.append(anime)

    return list

def createJSONByAlList(al_list):
    list = []

    al_list = al_list['data']['MediaListCollection']['lists'][0]['entries']

    for al_anime in al_list:
        anime = {}

        anime['id'] = al_anime["id"] if 'id' in al_anime else ''
        anime['id_al'] = al_anime["id"] if 'id' in al_anime else ''

        anime['url'] = 'https://anilist.co/anime/' + str(al_anime['mediaId'])

        anime['title'] = al_anime['media']['title']['romaji']
        anime['alternative_titles'] = []
        anime['alternative_titles'].append(al_anime['title']['english'] if 'title' in al_anime else '')
        anime['alternative_titles'].append(al_anime['title']['native'] if 'title' in al_anime else '')
        anime['alternative_titles'].extend(al_anime['synonyms'] if 'synonyms' in al_anime else '')

        anime['picture'] = al_anime['media']['coverImage']['extraLarge']

        anime['status'] = al_anime['media']['status']

        anime['num_episodes'] = al_anime['media']['episodes']

        anime['broadcast'] = {'day_of_the_week': '', 'start_time': '', 'next_airing_episode': ''}

        if 'nextAiringEpisode' in al_anime['media'] and al_anime['media']['nextAiringEpisode'] is not None:
            anime['broadcast']['time_until_airing'] = al_anime['media']["nextAiringEpisode"]['timeUntilAiring'] #if 'timeUntilAiring' in al_anime['media']["nextAiringEpisode"] else ''
            anime['broadcast']['next_airing_episode'] = al_anime['media']["nextAiringEpisode"]['episode'] #if 'episode' in al_anime['media']["nextAiringEpisode"] else ''
            
        anime['average_episode_duration'] = al_anime['media']['duration'] * 60 if al_anime['media']['duration'] is not None else 0

        anime['start_season'] = { 'year': 0, 'season': '' }
        anime['start_season']['year'] = al_anime['media']['seasonYear']
        anime['start_season']['season'] = al_anime['media']['season'].lower() if al_anime['media']['season'] is not None else ''
        anime['start_date'] = str(al_anime['media']['startDate']['year']) + '-' + str(al_anime['media']['startDate']['month']) + '-' + str(al_anime['media']['startDate']['day'])
        anime['end_date'] = (str(al_anime['media']['endDate']['year']) + '-' + str(al_anime['media']['endDate']['month']) + '-' + str(al_anime['media']['endDate']['day'])) if 'endDate' in al_anime['media'] else ''

        anime['broadcast']['day_of_the_week'] = datetime.strptime(anime['start_date'], "%Y-%m-%d").strftime("%A").lower()

        anime['list_status'] = { 'status': '', 'num_episodes_watched': ''}
        anime['list_status']['status'] = al_anime['status']
        anime['list_status']['num_episodes_watched'] = al_anime['progress']

        list.append(anime)

    return list

def createNormalizedJSON(mal_list, al_list):
    if mal_list is not None:
        return createJSONByMalList(mal_list, al_list)
    else:
        return createJSONByAlList(al_list)