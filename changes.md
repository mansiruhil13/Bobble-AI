
# Changes.md

## Project Overview

This project is a conversion of a static HTML, CSS, and JavaScript website into a Flask web app. The project already has a basic structure, with reusable components placed in partials for easy inclusion using Jinja templating. Contributors are expected to help in migrating remaining static pages to Flask templates, applying Jinja templating for code reusability, organizing static assets, and integrating Flask-WTF forms.

### Key Files

- `layout.html`: The base template from which all other templates inherit. It contains common structure such as `<head>` and `<body>` tags.
- `partials/header.html`: Contains the reusable header section of the website.
- `partials/footer.html`: Contains the reusable footer section of the website.
- `partials/scripts.html`: Contains the reusable `<script>` tags for the website.

## How to Setup and Run the Project
[View run.py](run.md)

## Contribution Guide

### 1. Converting HTML Pages to Flask Templates
- **Task**: Migrate each static HTML page into a Flask template.
  - Use `{% extends "layout.html" %}` at the beginning of each template to inherit from the base `layout.html`.
  - Replace common elements like header, footer, and scripts with Jinja includes:
    ```html
    {% include 'partials/header.html' %}
    {% include 'partials/footer.html' %}
    {% include 'partials/scripts.html' %}
    ```

### 2. Creating Reusable HTML Files
- **Task**: Create reusable components in the form of partial HTML files that can be included across multiple templates.
  - **Steps**:
    1. Identify common sections of HTML code that repeat across multiple pages (e.g., navigation bar, footer, sidebars).
    2. Move these sections into separate HTML files in the `partials/` directory.
    3. Use Jinja's `{% include %}` directive to include these reusable components in any template.
    
  - **Example**: 
    - If you want to make a reusable navigation bar:
      - Create a `partials/navbar.html` file:
        ```html
        <nav>
          <!-- Navigation links -->
        </nav>
        ```
      - Include this partial in other templates:
        ```html
        {% include 'partials/navbar.html' %}
        ```

  - **Benefits**: This approach ensures that changes to the navigation bar (or any other repeated section) need to be made in only one place, making it easier to maintain.

### 3. Adding Flask-WTF Forms

Flask-WTF is an extension that simplifies working with forms in Flask by integrating with the Flask framework and providing form validation.

#### Step-by-Step Guide for Adding Forms

1. **Install Flask-WTF**: Make sure Flask-WTF is installed.
   ```bash
   pip install Flask-WTF
   ```

2. **Create a Form Class in `forms.py`**:
   - Define the form structure using WTForms.
   
   **Example**: A basic login form
   ```python
   from flask_wtf import FlaskForm
   from wtforms import StringField, PasswordField, SubmitField
   from wtforms.validators import DataRequired

   class LoginForm(FlaskForm):
       username = StringField('Username', validators=[DataRequired()])
       password = PasswordField('Password', validators=[DataRequired()])
       submit = SubmitField('Log In')
   ```

3. **Add Routes for Forms in `app.py`**:
   - Create a route that handles both `GET` (to display the form) and `POST` (to process form submissions).
   
   **Example**: Login route
   ```python
   from flask import render_template, flash, redirect, url_for
   from forms import LoginForm

   @app.route('/login', methods=['GET', 'POST'])
   def login():
       form = LoginForm()
       if form.validate_on_submit():
           flash(f'Login requested for user {form.username.data}', 'success')
           return redirect(url_for('home'))
       return render_template('login.html', title='Login', form=form)
   ```

4. **Create a Template for the Form (`login.html`)**:
   - In your HTML file, use Jinja templating to render the form.
   
   **Example**: `login.html`
   ```html
   {% extends "layout.html" %}

   {% block content %}
   <div class="container">
       <form method="POST" action="">
           {{ form.hidden_tag() }}  <!-- CSRF token -->
           
           <div class="form-group">
               {{ form.username.label }}
               {{ form.username(class="form-control") }}
           </div>
           
           <div class="form-group">
               {{ form.password.label }}
               {{ form.password(class="form-control") }}
           </div>
           
           <div class="form-group">
               {{ form.submit(class="btn btn-primary") }}
           </div>
       </form>
   </div>
   {% endblock %}
   ```

5. **Handling Form Validation and CSRF**:
   - Flask-WTF includes CSRF protection automatically. Ensure that the form renders the `{{ form.hidden_tag() }}` to handle this protection.
   - Validation is handled by the `form.validate_on_submit()` method in the route, which checks whether the form was submitted and if all fields are valid.

### 4. Organizing Routes
- **Task**: For each HTML file being converted, create a corresponding route in `app.py`.
  - Example:
    ```python
    @app.route('/example')
    def example():
        return render_template('example.html')
    ```
  - Ensure route paths correspond logically to the page's functionality.

### 5. Organizing Static Files (CSS and JavaScript)
- **Task**: Ensure all static assets (CSS, JavaScript, images) are properly placed in the `static/` directory and referenced in the templates.
  - Use the Jinja `url_for` function to link to static files:
    ```html
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
    <script src="{{ url_for('static', filename='js/main.js') }}"></script>
    ```

### 6. Combining CSS and JavaScript
- **Task**: Help combine and minimize the CSS and JS files into 2–4 files.
  - Group them by type (e.g., main styles, plugin styles, main scripts, plugin scripts) and update `partials/scripts.html` accordingly.

### 7. Testing Pages
- **Task**: After converting pages to templates and adding routes, ensure that all pages render correctly by running the Flask app locally.
  - To run the app:
    ```bash
    flask run
    ```

### How to Get Started
1. **Fork the Repository**: Clone the project to your local environment.
2. **Install Flask**: Ensure Flask is installed in your environment:
    ```bash
    pip install Flask
    ```
3. **Run the App**: Use `flask run` to test the local changes.
4. **Submit a Pull Request**: Once your changes are complete, submit a pull request for review.

### Additional Notes
- Ensure that each template follows the DRY (Don't Repeat Yourself) principle by utilizing the base template and partials.
- Use meaningful commit messages to indicate the changes made.
- Refer to any unresolved issues for additional tasks that may need to be addressed.