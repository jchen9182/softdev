# Moududur Rahman and Justin Chen
# SoftDev1 pd2
#K06 -- StI/O: Divine your Destiny!
#2019-09-16


# I copy pasted the code into one big function and ipmorted it into app.py
import csv
import random


def getjob():
    allrows = []
    alljobs = {}

    with open("static/occupations.csv") as csvfile:
        readCSV = csv.reader(csvfile, delimiter=",")
        for row in readCSV:     
            allrows.append(row)
        # allrows is an array that has all the data in the file

    alljobs[allrows[1][0]] = float(allrows[1][1])
    # Turns all the percentage strings into floats

    for x in range(1, len(allrows)):
        alljobs[allrows[x][0]] = float(allrows[x][1]) * 10
    alljobs.pop("Total")
    # Adds dictionary entries for each of the occupations and their percentage
    # Also deletes the top and bottom row

    def getjob():
        low = 0
        high = 0
        selector = random.randint(0, 997)
        for job in alljobs.keys():
                high = low + alljobs[job]
                if low <= selector and selector < high:
                    return job
                low = high
    # For each job in the dictionary, there will be a range of numbers that corresponds 
    # to it depending on its percentage. We choose a random int and loop through until
    # there is a range the number corresponds with. Each iteration sets the range to that
    # of the next job.


    return getjob()


getjob()
