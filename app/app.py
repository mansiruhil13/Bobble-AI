from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from routes import register_routes


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

register_routes(app)





if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=5000)

