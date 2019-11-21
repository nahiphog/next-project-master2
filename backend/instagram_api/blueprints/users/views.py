from flask import Blueprint, jsonify
from models.user import User

users_api_blueprint = Blueprint('users_api',
                             __name__)



@users_api_blueprint.route('/', methods=['GET'])
def index(): #returns a list of users from database
    user =[ 
        {
        'id': user.id,
        'name': user.name,
        'email': user.email,
        'profile_picture': user.profile_picture
    } for user in User.select()
    ]

    return jsonify(user), 200
