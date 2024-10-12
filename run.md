# Flask Project Setup and Run Guide

This guide will help you set up and run the Flask project easily using the terminal or VS Code IDE.

---

## Prerequisites

Make sure you have the following installed:

- **Python 3.6+**
- **pip** (Python package installer)

---

## Step 1: Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone -b ashu-flask-organise https://github.com/yourusername/your-flask-project.git
cd Bobble-AI
```

---

## Step 2: Create and Activate a Virtual Environment

You can manually create and activate the virtual environment as follows:

For Linux/macOS:

```bash
python3 -m venv venv
source venv/bin/activate
```

For Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

---

## Step 3: Install Dependencies

Make sure all the required dependencies are listed in `requirements.txt`. Install them by running:

```bash
pip install -r requirements.txt
cd app/
```

---

### Setup Database

Flask-Migrate is a tool that allows you to manage database migrations for Flask applications.

Flask-Migrate helps manage SQLAlchemy database migrations for Flask applications using Alembic. Follow these steps to set it up:

1. **Initialize Migration Repository**

   Run the following command to initialize the migration repository:

   ```bash
   flask db init
    ```


2. **Migrate Database**

   Run the following command to migrate the database:

   ```bash
    flask db migrate -m "Initial migration"
    ```

3. **Upgrade Database**

   Run the following command to upgrade the database:

   ```bash
   flask db upgrade
   ```



## Step 4: Running the Flask App

The project’s main code is inside the `app` folder. To run the Flask app, you need to set the `FLASK_APP` environment variable:

For Linux/macOS:

```bash
export FLASK_APP=app  # Set the app folder
flask run              # Run the Flask app
```

For Windows:

```bash
set FLASK_APP=app     # Set the app folder
flask run              # Run the Flask app
```

The app will be accessible at: [http://127.0.0.1:5000](http://127.0.0.1:5000).

---

## Additional Notes

- Ensure you're in the correct environment (`venv`) before running the Flask app.
- If you encounter any issues, make sure Python, pip, and Flask are properly installed.

