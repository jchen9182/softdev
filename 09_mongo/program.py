from pymongo import MongoClient
import json

FILENAME = "primer-dataset.json"
file = open(FILENAME, "r")
data = file.readlines()

client = MongoClient('localhost', 27017) 
db = client.test
restaurants = db.restaurants

for line in data:
    restaurants.insert(line)

# restaurants.delete_many({})

# with open("primer-dataset.json", 'r') as file:
#     dataset = json.load(file)
# restaurants.insert_many(dataset)

file.close()
