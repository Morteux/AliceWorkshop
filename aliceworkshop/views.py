# aliceworkshop/views.py

import json
from datetime import datetime
from django.shortcuts import render
from aliceworkshop.api_querys import *
from aliceworkshop.json_functions import *
from aliceworkshop.bbdd_querys import *


version_number = "1.6"
version_date = "29/03/2024"

def index(request):
    return render(
        request,
        'aliceworkshop/index.html',
        {
            'version_number': version_number,
            'version_date': version_date
        }
    )


def aliceworkshop(request, user):
    mal_list = getMALUserList(user)
    al_list = getALUserListByMALId(mal_list)

    # Filter for development reason
    if user.casefold() != "morteux":
        insert(connect(), {"name": user, "date": datetime.today(), "site": "MAL"})
    
    return render(
        request,
        'aliceworkshop/aliceworkshop.html',
        {
            'user': user,
            'list': repr(json.dumps(createNormalizedJSON(mal_list, al_list))),
            'version_number': version_number,
            'version_date': version_date
        }
    )

def airinglist(request, user):
    al_list = getALUserList(user)

    # Filter for development reason
    if user.casefold() != "morteux":
        insert(connect(), {"name": user, "date": datetime.today(), "site": "AL"})
    
    return render(
        request,
        'aliceworkshop/airinglist.html',
        {
            'user': user,
            'list': repr(json.dumps(createNormalizedJSON(None, al_list))),
            'version_number': version_number,
            'version_date': version_date
        }
    )

def myerrorlist(request, user, code):
    
    return render(
        request,
        'aliceworkshop/myerrorlist.html',
        {
            'user': user,
            'code': code,
            'version_number': version_number,
            'version_date': version_date
        }
    )