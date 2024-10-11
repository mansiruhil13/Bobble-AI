
from flask import render_template, redirect, url_for, request, flash, session



def register_routes(app):


    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/home')
    def home():
        return render_template('home.html')

    @app.route('/features')
    def features():
        return render_template('features.html')

    @app.route('/team')
    def team():
        return render_template('team.html')

    @app.route('/contact')
    def contact():
        return render_template('contact.html')

    @app.route('/Feedback')
    def Feedback():
        return render_template('Feedback.html')

    @app.route('/login', methods=['GET', 'POST'])
    def login():
        if request.method == 'POST':
            if request.form['username'] == 'admin' and request.form['password'] == 'admin':
                session['logged_in'] = True
                return redirect(url_for('home'))
            else:
                flash('Invalid username or password')
                return redirect(url_for('login'))
        return render_template('login.html')


    @app.route('/logout')
    def logout():
        session.pop('logged_in', None)
        flash('You were logged out')
        return redirect(url_for('login'))


    @app.route('/up', methods=['GET', 'POST'])
    def up():
        return render_template('up.html')
