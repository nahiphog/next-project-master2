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
        return error_401('Reponse is not a JSON !')
    
    #getting data from front end
    data = request.get_json()
    name = data.name
    password = data.password

    #check if name and password field are filled
    if not (name and password):
       return error_401('Invalid input!')

    user = User.get_or_none(User.name == name)
    #checking passwords if user with provided username exists
    if user:
        result = check_password_hash(user.password, password)

        if result:
            #if there is a result, generate an access token(JWT) with identity as user's name
            access_token = create_access_token(identity = name)

            data =  {
                "id": user.id,
                "profile_picture": user.profile_picture,
                "username": user.name,
                "access_token": access_token,

            }
            
            return success_201('User credentials are verified for sign in!', data)
        
        else:
           return error_401('Some error occurred! Please try again!')


