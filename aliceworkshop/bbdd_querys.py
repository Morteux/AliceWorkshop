import pymongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


def connect():
    uri = "mongodb+srv://vercel-admin-user:La3DRyVm6T0eZtqQ@mal-login.iwum5bk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    client = pymongo.MongoClient(uri)

    return client


def insert(client, data):
    db = client["AliceWorkshop"]["Login"]

    response = db.insert_one(data)