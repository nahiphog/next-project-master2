from flask import Blueprint, jsonify
from instagram_api.util.response import *
from models.user import User
from models.lesson import Lesson

lessons_api_blueprint = Blueprint('lessons_api',
                             __name__)

@lessons_api_blueprint.route('/create', methods=['POST'])
@jwt_required
def create():
    # Check for valid json
    if not request.is_json:
        error_401("Reponse is not JSON")

    # Check if user exists and signed in
    jwt_user = get_jwt_identity()
    user = User.get_or_none(User.id == jwt_user.username)

    if not user:
        error_401("Unauthorized action")

    # Retrieve data from json
    data = request.get_json

    title = data.title
    description = data.description
    if data.teach:
        teach = True
    else:
        teach = False
    skill_tags = data.skill_tags # TODO: decide later how to handle

    if title and description:
        lesson = Lessons(title=title, description=description, teach=teach, owner=user)        
        if lesson.save():
            data = {
                'id': lesson.id,
                'title': lesson.title,
                'description': lesson.description,
                'rating': lesson.rating,
                'teach': lesson.teach,
                'owner': lesson.user
            }
            success_201("New lesson is successfully create", data)
        else:
            error_401("Create lesson failed")    
    else:
        error_401("Invalid title or description")

@lessons_api_blueprint.route('/', methods=['GET'])
def index(): #returns a list of users from database
    pass

