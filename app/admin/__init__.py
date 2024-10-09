# admin/__init__.py

from flask import Blueprint

admin_bp = Blueprint('admin', __name__)

from . import routes  # Import the views module to register routes
