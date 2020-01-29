# Justin Chen and Jacob Olin
# SoftDev1 pd02
# K#18 -- Average
# 2019-10-10

import sqlite3
import csv

import sqlite3  
import csv       

DB_FILE="data.db"
db = sqlite3.connect(DB_FILE) 
c = db.cursor()              

allData = '''
SELECT name, mark, students.id
FROM students, courses
WHERE students.id = courses.id;
''' 
c.execute(allData)
dataList = c.fetchall() # Get data

mydict = {}
for line in dataList:
    name = line[0]
    grade = line[1]
    idnum = line[2]
    if not name in mydict:  #If name isn't in dict, initialize it
        mydict[name] = {"total": 0, "n": 0, "id": idnum, "average": 0}
        # total is the total of all their grades and n is how many grades they have
    mydict[name]["total"] += grade
    mydict[name]["n"] += 1

# Calculate averages
for name in mydict:
    mydict[name]["average"] = int(mydict[name]["total"] / mydict[name]["n"])

# Print data
for name in mydict:
    print(name + ":")
    print("\tID: " + str(mydict[name]["id"]))
    print("\tAverage: " + str(mydict[name]["average"]))

# Create table
makeTable = "CREATE TABLE stu_avg (id INTEGER, avg INTEGER)"
c.execute(makeTable)

# Add values to stu_avg
for name in mydict:
    myid = str(mydict[name]["id"])
    avg = str(mydict[name]["average"])
    insert = "INSERT INTO stu_avg VALUES (" + myid + "," + avg + ");"
    c.execute(insert)

# Add values to courses
myid = 10
code = '"math"'
while (myid > 0):
    grade = str(myid * 10 - 5)
    insert = "INSERT INTO courses VALUES ( " + code + "," + grade + "," + str(myid) + ");"
    c.execute(insert)
    myid -= 1
    
db.commit() 
db.close()  

