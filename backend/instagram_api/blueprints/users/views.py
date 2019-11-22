from flask import Blueprint, request
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from instagram_api.util.response import *
from models.user import User

users_api_blueprint = Blueprint('users_api',
                             __name__)



@users_api_blueprint.route('/index', methods=['GET'])
@jwt_required
def index(): #returns a list of users from database
    users =[ 
        {
        'id': user.id,
        'name': user.name,
        'email': user.email,
        'profile_picture': user.profile_picture
    } for user in User.select()
    ]

    return success_200(users)


@users_api_blueprint.route('/signup', methods=['POST'])
def new():
    print("debug")
    if not request.is_json:
        return error_401('Response is not JSON!')

    new_user = request.get_json()
    print(new_user)
    name = new_user['name']
    email = new_user['email']
    password = new_user['password']

    if name and email and password:

        hashed_password = generate_password_hash(password)

        x = User(name =name, email=email, password=hashed_password)
        if x.save():
            user = {
                "id": x.id,
                "profile_picture": x.profile_picture,
                "username": x.name,
                'email': x.email
            }
            
            return success_201('Account successfully created!', user)
        
        else:
            return error_401('Response is not JSON!')
    
    else:
        return error_401('Invalid input!')

@users_api_blueprint.route('/<user_id>', methods=['GET'])
@jwt_required
def show(user_id):
    search_user = User.get_or_none(User.id == user_id)

    
    user = {'id': search_user.id, 
    'name': search_user.name,
    'email': search_user.email,
    'profile_picture': search_user.profile_picture}
    
    return success_201(f'Returned details of user with id: {search_user.id}', user)

@users_api_blueprint.route('/<user_id>', methods=['POST'])
@jwt_required
def update(user_id):
    
    if not request.is_json:
       return error_401('Response is not JSON!')
        
    user = User.get_or_none(User.id == user_id)

    if not user:
       return error_401('User not found!')

    jwt_user = get_jwt_identity()

    if not jwt_user == user.name:
       return error_401('Unauthorized user!')
        

    user_data = request.get_json

    name = user_data.name
    email = user_data.email
    password = user_data.password

    if name and email and password:
        hashed_password = generate_password_hash(password)
        x = User.update(name=name, email=email, password=hashed_password).where(User.id == user.id)

        if x.execute():
            
            user = {'id': user.id,
            'name': user.name,
            'email': user.email,
            'profile_picture': user.profile_picture}
        
           return success_201('Account updated successfully!', user)

        else:
            error_401('Something went wrong when updating user details!')

 
# @users_api_blueprint.route('/<user_id>', methods=['POST'])
# @jwt_required
# def update_profile_pic(user_id):
    
#     jwt_user = get_jwt_identity()
#     user = User.get_or_none(User.name == jwt_user)

#     if user:
#         image_file = request.files

#         if image_file:
#             x = User.update(User.profile_picture = image_file.name).where(User.id == user.id) 

#             if x.execute():

#                 data = {
#                 'id': user.id,
#                 'name': user.name,
#                 'email': user.email,
#                 'profile_picture': user.profile_picture
#                 }

#                 success_201('Profile image successfully updated', data)

#             else:
#                 error_401('Invalid file input!')            

#     else:
#         error_401('User not found!')

    



