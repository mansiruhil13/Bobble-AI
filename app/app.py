from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from routes import register_routes
from flask_migrate import Migrate


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'secretkey'


db = SQLAlchemy(app)

register_routes(app)

migrate = Migrate(app, db)  






if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=5000)

