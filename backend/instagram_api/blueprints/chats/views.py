# from flask import Flask, Blueprint, request
# from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
# from instagram_api.util.response import *
# from models.chat import Chat
# from models.user import User

# chats_api_blueprint = Blueprint('chats_api', __name__)

# @chats_api_blueprint.route('/create', methods=['POST'])
# @jwt_required
# def create():

#     if not request.is_json:
#         error_401('Reponse type is not JSON!')

#     jwt_user = get_jwt_identity()
#     user = User.get_or_none(User.name == jwt_user)
    
#     if user:
#         chat_data = request.get_json()
#         lesson = chat_data.lesson_id
#         content = chat_data.content

#         x = Chat.create(user=user.id, lesson=lesson, content=content)

#         if x.execute():

#             data ={
#                 'id': x.id,
#                 'user_id': user.id,
#                 'lesson': lesson,
#                 'content': content
#             }

#             success_201('Chat sent successfully', data)
#         else:
#             error_401('Error saving chat in database!')
#     else:
#         error_401('Invalid user!')

# @chats_api_blueprint.route('/', methods=['GET'])
# @jwt_required
# def index():

#     jwt_identity = get_jwt_identity()
#     user = User.get_or_none(User.id == jwt_identity)
#     user_chats = Chat.select().where()
    

#     all_chats = [
#         {
#             'id': chat.id,
#             'lesson': chat.lesson,
#             'user_id': ,

#         } for chat in Chat
#     ]