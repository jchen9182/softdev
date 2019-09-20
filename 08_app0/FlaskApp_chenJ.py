# Justin Chen
# SoftDev1 pd2
# K08 -- Lemme Flask You Sump’n
# 2019-09-18

from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__) # Printed onto console on refresh
    return "hellooooooooooooo"

@app.route("/nuggets")
def nuggets():
    print(__name__)
    return "nuggets"

@app.route("/nuggets/milk")
def milk():
    # Calling hello_world() prints helloooooo onto the console
    print(__name__)
    return "milk"

if __name__ == "__main__":
    app.debug = True
    app.run()