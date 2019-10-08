# Justin Chen
# SoftDev1 pd02
# K#17 -- No Trouble
# 2019-10-08

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="data.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >


command = ""          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database
