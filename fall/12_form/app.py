# Justin Chen and Brian Moses
# SoftDev1 pd2
# K12 -- Echo Echo Echo
# 2019-09-26

from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/')
def main():
    print(app)
    print(request)
    print(request.args)
    return render_template("index.html")

@app.route('/auth')
def auth():
    print(app)
    print(request)
    print(request.args)
    print(request.args["Username"])
    print("info")
    print(request.headers)
    return render_template("response.html",
    username = request.args.get('Username'),
    num = random.randint(0,2),
    method = request.method)

if __name__ == "__main__":
        app.debug = True
        app.run()