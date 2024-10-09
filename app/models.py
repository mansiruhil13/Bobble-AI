from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return '<User {}>'.format(self.username)
    

class Hospital(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, unique=True)
    address = db.Column(db.String(128))
    lat = db.Column(db.String(64))
    lng = db.Column(db.String(64))
    phone = db.Column(db.String(64))


    def __repr__(self):
        return '<Hospital {}>'.format(self.name)
    

class Ambulance(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, unique=True)
    address = db.Column(db.String(128))
    lat = db.Column(db.String(64))
    lng = db.Column(db.String(64))
    phone = db.Column(db.String(64))


    def __repr__(self):

        return '<Ambulance {}>'.format(self.name)
    

class Driver(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True, unique=True)
    address = db.Column(db.String(128))
    lat = db.Column(db.String(64))
    lng = db.Column(db.String(64))
    phone = db.Column(db.String(64))


    def __repr__(self):
        return '<Driver {}>'.format(self.name)
    
    

