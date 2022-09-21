from msilib.schema import tables
from flask import Flask, request
import json
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route('/andrew', methods=['GET', 'POST'])
def hello_andrew():
    print('Andrew v6')
    return ({'name': 'Andrew v6', 'description': 'Super'})


@app.route('/larry')
def hello_larry():
    return 'Hello, you are the best'


@app.route('/submit', methods=['GET', 'POST'])
def testingv2():
    print('------start test post')
    print(request)
    print('---', request.json)
    name = (request.json['name'])
    active = (request.json['activity'])
    print(active)
    dist = (request.json['distance'])
    actDate = (request.json['actDate'])
    con = sqlite3.connect("exercise.db")
    cur = con.cursor()
    cur.execute("INSERT INTO activities (name, activity, distance, act_date, time_stamp) VALUES (?,?,?,?,DATETIME('now', 'localtime'))",
                (name, active, dist, actDate))
    print('---insert complete')
    con.commit()
    con.close()
    if int(dist) <= 3:
        return {'greeting': 'You are lazy.', 'total': 25}
    else:
        return {'greeting': 'Good job today', 'total': 100}


@app.route('/activities', methods=['POST', 'GET'])
def getactivities():
    print('------start getting activities')
    print(request)
    # print(request.json)
    numRows = int(request.json)
    con = sqlite3.connect("exercise.db")
    cur = con.cursor()
    print('-----data posted', numRows)
    cur.execute("SELECT * FROM activities ORDER BY act_date DESC, time_stamp DESC LIMIT ?",(numRows,))
    table = [dict((cur.description[i][0], value)
        for i, value in enumerate(rows)) for rows in cur.fetchall()]
    for row in table:
        print(row)
    con.close()
    return table

if __name__ == "__main__":
    app.run(debug=True)
