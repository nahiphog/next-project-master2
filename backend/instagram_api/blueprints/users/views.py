from flask import Blueprint, jsonify, request
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from models.user import User

users_api_blueprint = Blueprint('users_api',
                             __name__)



@users_api_blueprint.route('/index', methods=['GET'])
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


@users_api_blueprint.route('/signup', methods=['POST'])
def new():
    if not request.is_json:
        response = {
            "message": "Reponse is not JSON",
            "status": "fail"
        }
        return jsonify(response), 401

    new_user = request.get_json

    name = new_user.name
    email = new_user.email
    password = new_user.password

    if name and email and password:

        hashed_password = generate_password_hash(password)

        x = User(name =name, email=email, password=hashed_password)
        if x.save():
            response = {
                'status': 'success,',
                'message': 'Account successfully created!',
                'user': {
                    "id": x.id,
                    "profile_picture": x.profile_picture,
                    "username": x.name,
                    'email': x.email
                }
            }
            return jsonify(response), 200
        
        else:
            response = {
            "message": "Oops! Something went wrong when saving user to database!",
            "status": "fail"
        }
        return jsonify(response), 401
    
    else:
        response = {
                "message": "Invalid input!",
                "status": "fail"
            }
        return jsonify(response), 401


@users_api_blueprint.route('/<user_id>', methods=['GET'])
def show(user_id):
    user = User.get_or_none(User.id == user_id)

    response = {
        user:
        {'id': user.id,
        'name': user.name,
        'email': user.email,
        'profile_picture': user.profile_picture},
        'status': 'success',
        'message':f'Returned details of user with id: {user.id}'
    }

    return jsonify(response), 200

@users_api_blueprint.route('/<user_id>', methods=['POST'])
@jwt_required
def update(user_id):
    
    if not request.is_json:
        response = {
                "message": "Data type is not JSON!",
                "status": "fail"
            }
        return jsonify(response), 401
        
    user = User.get_or_none(User.id == user_id)
    jwt_user = get_jwt_identity()

    if not jwt_user == user.name:
        response = {
                "message": "Unauthorized user!",
                "status": "fail"
            }
        return jsonify(response), 401
        

    user_data = request.get_json

    name = user_data.name
    email = user_data.email
    password = user_data.password

    if name and email and password:
        hashed_password = generate_password_hash(password)
        x = User.update(name=name, email=email, password=hashed_password).where(User.id == user.id)

        if x.execute():
            response = {
            'message': 'Account updated successfully!',
            'status': 'success',
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'profile_picture': user.profile_picture
        }

            return jsonify(response), 200
        
        else:
            response = {
                "message": "Oops! Something went wrong in updating user details!",
                "status": "fail"
            }
        return jsonify(response), 401




