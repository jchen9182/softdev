from flask import Flask, render_template
import urlllib2, json
app = Flask(__name__)

@app.route('/')
def root:
    link = 'https://api.nasa.gov/planetary/apod?api_key=OLk8CUnTmRg7KfoKMh17Uva6gzWkkfA9IjaCb4ub'
    picLink = 'https://apod.nasa.gov/apod/image/1911/NGC3717_Hubble_1080.jpg'
    url = urllib2.urlopen(link)
    data = json.loads(response)
    return render_template('index.html', pic = data[picLink])

if __name__ == '__main__':
    app.debug = True
    app.run()
