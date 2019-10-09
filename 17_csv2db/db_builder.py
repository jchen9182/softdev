# Tyler Huang and Justin Chen
# SoftDev1 pd02
# K#17 -- No Trouble
# 2019-10-08

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

DB_FILE="data.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

command = "CREATE TABLE courses (code TEXT,  mark INTEGER, id INTEGER);" # create table
c.execute(command)    # run SQL statement

with open('courses.csv', 'r') as csvfile: # open csv file
    reader = csv.DictReader(csvfile, delimiter = ",") 
    #convert csv into dictionary with , as delimiter
    reader.__next__() #skip first line
    for line in reader:
        command = "INSERT INTO courses VALUES (\"" + line['code'] + "\"," + line['mark'] + "," + line['id'] + ");" 
        # insert code, mark, id into table 
        c.execute(command) 
        #print(line['code'])

# Repeat the same process but with students.csv
command = "CREATE TABLE students (name TEXT,  age INTEGER, id INTEGER);" 
c.execute(command)    

with open('students.csv', 'r') as csvfile: 
    reader = csv.DictReader(csvfile, delimiter = ",") 
    reader.__next__()
    for line in reader:
        command = "INSERT INTO students VALUES (\"" + line['name'] + "\"," + line['age'] + "," + line['id'] + ");" 
        # insert name, age, id into table
        c.execute(command) 

db.commit() #save changes
db.close()  #close database
