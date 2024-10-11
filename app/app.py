from flask import Flask
import sqlite3
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
db = SQLAlchemy(app)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=5000)

