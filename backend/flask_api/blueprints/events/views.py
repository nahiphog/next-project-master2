from flask import Flask
from flask import Blueprint, request
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from flask_api.util.response import *
from models.user import User

events_api_blueprint = Blueprint('events_api', __name__)

@events_api_blueprint.route('/create', methods=['POST'])
def create():
    pass

@events_api_blueprint.route('/', methods=['GET'])
def index():
    pass

@events_api_blueprint.route('/<event_id>', methods=['GET'])
def show():
    pass

@events_api_blueprint.route('/<event_id>/datetime', methods=['POST'])
def update_datetime():
    pass

@events_api_blueprint.route('/<event_id>/status', methods=['POST'])
def update_status():
    pass

@events_api_blueprint.route('/<event_id>/review', methods=['POST'])
def update_review():
    pass


