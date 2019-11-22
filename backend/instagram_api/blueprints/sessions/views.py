from flask import Flask, jsonify, Blueprint,request
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from instagram_api.util.response import *
from models.user import User
from werkzeug.security import check_password_hash

sessions_api_blueprint = Blueprint('sessions_api', __name__)

@sessions_api_blueprint.route('/signin', methods=['POST'])
def create():
    # Check for valid json
    if not request.is_json:
       return error_401("Reponse is not JSON")
    
    # Retrieve data from json
    data = request.get_json()

    name = data['name']
    password = data['password']

    # Check for valid name and password
    if name and password:
        user = User.get_or_none(User.name == name)
        if user and check_password_hash(user.password, password):
            # Generate an access token(JWT) with identity as user's name
            access_token = create_access_token(identity = name)
            data =  {
                "id": user.id,
                "profile_picture": user.profile_picture,
                "username": user.name,
                "access_token": access_token,
            }
            return success_201('User credentials are verified for sign in!', data)
        else:
            return error_401('Invalid username or password!')
    else:
        return error_401('Invalid input!')

