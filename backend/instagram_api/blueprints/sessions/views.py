from flask import Flask, jsonify, Blueprint,request
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from werkzeug.security import check_password_hash
from instagram_api.util.response import *
from models.user import User



sessions_api_blueprint = Blueprint('sessions_api', __name__)



@sessions_api_blueprint.route('/signin', methods=['POST'])
def create():
    #check if response is even a json 
    if not request.is_json:
        response = {
            "message": "Reponse is not JSON",
            "status": "fail"
        }
        return jsonify(response), 401
    
    #getting data from front end
    data = request.get_json()
    name = data.name
    password = data.password

    #check if name and password field are filled
    if not (name and password):
        response = {
            "message": "Some error occurred. Please try again.",
            "status": "fail"
        }
        return jsonify(response), 401

    user = User.get_or_none(User.name == name)
    #checking passwords if user with provided username exists
    if user:
        result = check_password_hash(user.password, password)

        if result:
            #if there is a result, generate an access token(JWT) with identity as user's name
            access_token = create_access_token(identity = name)

            response = {
            "access_token": access_token,
            "message": "Successfully signed in.",
            "status": "success",
            "user": {
                "id": user.id,
                "profile_picture": user.profile_picture,
                "username": user.name
            }
            }
            return jsonify(response), 200
        
        else:
            response = {
                "message": "Some error occurred. Please try again.",
                "status": "fail"
            }
            return jsonify(response), 401


