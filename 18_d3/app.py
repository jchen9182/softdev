from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__) # Printed onto console on refresh
    return render_template("index.html")

if __name__ == "__main__":
    app.debug = True
    app.run()