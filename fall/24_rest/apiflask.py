from flask import Flask, render_template
import urllib3, json
app = Flask(__name__)

@app.route('/')
def root():
    http = urllib3.PoolManager()
    link = 'https://api.nasa.gov/planetary/apod?api_key=OLk8CUnTmRg7KfoKMh17Uva6gzWkkfA9IjaCb4ub'
    req = http.request('GET', link)
    data = json.loads(req.data)
    return render_template('index.html', pic = data['url'], text = data['explanation'])

if __name__ == '__main__':
    app.debug = True
    app.run()
