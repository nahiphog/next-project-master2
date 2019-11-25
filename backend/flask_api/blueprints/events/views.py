from flask import Flask
from flask import Blueprint, request
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from flask_api.util.response import *
from models.user import User
from models.request import Request

events_api_blueprint = Blueprint('events_api', __name__)

@events_api_blueprint.route('/create', methods=['POST'])
@jwt_required

def create():

    if not request.is_json:
        return error_401('Request is not JSON!')

    jwt_identity = get_jwt_identity()
    user = User.get_or_none(jwt_identity == User.name)

    if user: 
        event_info = request.get_json
        query = Request(lesson=event_info.lesson_id, user= user.id, start_datetime= event_info.start_datetime)

        if query.save():
            data = {
                'lesson_id': event_info.lesson_id,
                'user_id': user.id,
                'start_datetime':event_info.start_datetime
            }

            return success_201('Event created successfully!', data)
        
        else:
           return error_401('Error when creating event')
    else:
       return error_401('User not found in database!')


@events_api_blueprint.route('/', methods=['GET'])
@jwt_required
def index():

    jwt_identity = get_jwt_identity()
    user = User.get_or_none(User.name == jwt_identity)

    data = [
        {
            'id': event.id,
            'lesson_id': event.lesson_id,
            'user_id': user.id,
            'status': event.status,
            'start_datetime': event.start_datetime,
            'rating': event.rating,
            'comment': event.comment
        } for event in Request.select().where(Request.user_id == user.id)
    ]

    return success_201("List of all current user's events", data)

@events_api_blueprint.route('/<event_id>', methods=['GET'])
@jwt_required
def show(event_id):

    jwt_identity = get_jwt_identity()
    user = User.get_or_none(User.name == jwt_identity)
    if user: 
        event = Request.get_or_none(Request.id == event_id)
        
        data ={
            'id': event.id,
            'lesson_id': event.lesson_id,
            'user_id': user.id,
            'status': event.status,
            'start_datetime': event.start_datetime,
            'rating': event.rating,
            'comment': event.comment
        }

        return success_201(f'Returned data about event {event_id}', data)
    
    else:
        return error_401('User not found!')



@events_api_blueprint.route('/<event_id>/datetime', methods=['POST'])
@jwt_required
def update_datetime(event_id):
    if request.is_json():
        return error_401('Response is not JSON!')

    jwt_identity = get_jwt_identity()
    user = User.get_or_none(User.name == jwt_identity)
    if user:
        user_update = request.get_json
        new_datetime = user_update.start_datetime
        event = Request.get_or_none(event_id == Request.id)
        query = Request.update(start_datetime = new_datetime).where(Request.id == event_id)
        if query.execute():
            data = {
                'id': event.id,
                'lesson_id': event.lesson_id,
                'user_id': user.id,
                'status': event.status,
                'start_datetime': event.start_datetime,
                'rating': event.rating,
                'comment': event.comment
            }
            return success_201(f'start_datetime of event {event.id} updated succesfully', data)
        else:
            return error_401('Error when updating datetime of event')
    else:
        return error_401('User not found!')
    

@events_api_blueprint.route('/<event_id>/status', methods=['POST'])
@jwt_required
def update_status(event_id):
    if request.is_json():
        return error_401('Response is not JSON!')

    jwt_identity = get_jwt_identity()
    user = User.get_or_none(User.name == jwt_identity)
    if user:
        user_update = request.get_json
        new_status = user_update.status
        event = Request.get_or_none(event_id == Request.id)
        query = Request.update(status = new_status).where(Request.id == event_id)
        if query.execute():
            data = {
                'id': event.id,
                'lesson_id': event.lesson_id,
                'user_id': user.id,
                'status': event.status,
                'start_datetime': event.start_datetime,
                'rating': event.rating,
                'comment': event.comment
            }
            return success_201(f'status of event {event.id} updated succesfully', data)
        else:
            return error_401('Error when updating status of event')
    else:
        return error_401('User not found!')

@events_api_blueprint.route('/<event_id>/review', methods=['POST'])
@jwt_required
def update_review(event_id):
    if request.is_json():
        return error_401('Response is not JSON!')

    jwt_identity = get_jwt_identity()
    user = User.get_or_none(User.name == jwt_identity)
    if user:
        user_update = request.get_json
        new_rating = user_update.rating
        new_comment = user_update.comment
        event = Request.get_or_none(event_id == Request.id)
        query = Request.update(rating = new_rating, comment=new_comment).where(Request.id == event_id)
        if query.execute():
            data = {
                'id': event.id,
                'lesson_id': event.lesson_id,
                'user_id': user.id,
                'status': event.status,
                'start_datetime': event.start_datetime,
                'rating': event.rating,
                'comment': event.comment
            }
            return success_201(f'Rating and comment of event {event.id} updated succesfully', data)
        else:
            return error_401('Error when updating rating and comment of event')
    else:
        return error_401('User not found!')


