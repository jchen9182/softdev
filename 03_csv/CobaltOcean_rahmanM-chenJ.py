# Moududur Rahman and Justin Chen
# SoftDev1 pd2
#K06 -- StI/O: Divine your Destiny!
#2019-09-16

import csv

import random

allrows = []
alljobs = {}

with open("occupations.csv") as csvfile:
    readCSV = csv.reader(csvfile, delimiter=",")
    for row in readCSV:
        allrows.append(row)

# print (allrows[1])

alljobs[allrows[1][0]] = float(allrows[1][1])

# print (alljobs[allrows[1][0]])

for x in range(1, len(allrows)):
    alljobs[allrows[x][0]] = float(allrows[x][1]) * 10

alljobs.pop("Total")

def getjob():
    low = 0
    high = 0
    selector = random.randint(0, 997)
    for job in alljobs.keys():
            high = low + alljobs[job]
            if low <= selector and selector < high:
                return job
            low = high

testdict = {}

for x in alljobs.keys():
    testdict[x] = 0

for x in range(1000):
    z = getjob()
    #print(z)
    testdict[z] += 1

print(testdict)