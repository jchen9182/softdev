# Moududur "Moody" Rahman and Justin Chen
# SoftDev1 pd2
# K10 -- Jinja Tuning
# 2019-09-23


from flask import Flask, render_template
import csvtest
import csv

app = Flask(__name__)

@app.route("/")     # This is the "homepage"
def hello_world():
    print(__name__) # Printed onto console on refresh
    return '''<a href="/occupyflaskst">click here for 10_occ !!</a> <br>
                <a href="/jeff">old index page</a> <br>
                <a href="/my_foist_template">jinja test</a> <br>
            '''


@app.route("/jeff")   #Testing a dumb method to read html
def jeff():
    print(__name__)
    return open("./static/index.html").read()


@app.route("/a")
def a():
    print(__name__)    # Don't go here
    return csvtest.allrows   # This is just me playing around lmao


@app.route("/my_foist_template")
def disp():
    print(__name__) # Printed onto console on refresh
    coll = [0, 1,2, 3,4, 5]
    return render_template( "tempp.html", username = "doof")   # Jinja attempt one!


@app.route("/occupyflaskst")
def hw1():
    allrows = []

    with open("static/occupations.csv") as csvfile:  # Reads file for the html table
        readCSV = csv.reader(csvfile, delimiter=",")
        for row in readCSV:
            allrows.append(row)

    print(__name__) # Printed onto console on refresh
    
    return render_template( "occupation.html", jobinp = csvtest.getjob(), twat = allrows[1:])
    # Twat is a 2d array of the jobs
    # .getjob() is an imported function to return the weighted randomly chosen job
    # The csv entries are also printed


if __name__ == "__main__":
    app.debug = True
    app.run()
