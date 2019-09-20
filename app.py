from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__) # Printed onto console on refresh
    return "hellooooooooooooo"

@app.route("/jeff")
def jeff():
    print(__name__)
    return open("./static/index.html").read()

@app.route("/template")
def doof():
    print(__name__) # Printed onto console on refresh
    coll = [0, 1,2, 3,4, 5]


    return "helloooooooooo"



if __name__ == "__main__":
    app.debug = True
    app.run()
