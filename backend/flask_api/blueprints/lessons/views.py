from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_api.util.response import *
from models.user import User
from models.lesson import Lesson

lessons_api_blueprint = Blueprint('lessons_api', __name__)

@lessons_api_blueprint.route('/create', methods=['POST'])
@jwt_required
def create():
    # Check for valid json
    if not request.is_json:
       return error_401("Reponse is not JSON")

    # Check if user exists and signed in
    jwt_user = get_jwt_identity()
    user = User.get_or_none(User.name == jwt_user)
    if not user:
       return error_401("Unauthorized action")

    # Retrieve data from json

    data = request.get_json()
    print(data)

    title = data['title'] 
    description = data['description'] 
    if (str(data['teach']) == "True"):
        teach = True
    elif (str(data['teach']) == "False"):
        teach = False
    else:
        return error_401("Invalid teach input")
    skill_tags = data['skill_tags'] # TODO: decide later how to handle #### Added bracket here too

    # Check title and description and then create new lesson
    if title and description:

        lesson = Lesson(title=title, description=description, teach=teach, owner=user)

        print(lesson) 
        if lesson.save():
            lesson = {
                'id': lesson.id,
                'title': title,
                'description': description,
                'rating': 0,
                'teach': teach,
                'owner': user.id
            }
            return success_201("New lesson created successfully", lesson) 
        else:
            return error_401("Create lesson failed")    
    else:
        return error_401("Invalid title or description")

@lessons_api_blueprint.route('/', methods=['GET'])
@jwt_required
def index():
    # Check if user exists and signed in
    jwt_user = get_jwt_identity()

    user = User.get_or_none(User.name == jwt_user)
    if not user:
        return error_401("Unauthorized action")

    # Retrieve lessons from database
    lessons = [ 
        {
            'id': lesson.id,
            'title': lesson.title,
            'description': lesson.description,
            'rating': lesson.rating,
            'owner': lesson.owner_id,
            'teach': lesson.teach
        } for lesson in Lesson.select()
    ]

    if lessons:
        return success_200(lessons)
    else:
        return error_404("No lessons found")

@lessons_api_blueprint.route('/<lesson_id>', methods=['GET'])
@jwt_required
def show(lesson_id):
    # Check if user exists and signed in
    jwt_user = get_jwt_identity()
    user = User.get_or_none(User.name == jwt_user)

    if not user:
       return error_401("Unauthorized action")

    # Retrieve particular lesson from database
    # lesson = Lesson.select().where(Lesson.id == lesson_id)
    lesson = Lesson.get_or_none(Lesson.id == lesson_id)

    if lesson:
        data = {
            'id': lesson.id,
            'title': lesson.title,
            'description': lesson.description,
            'rating': lesson.rating,
            'teach': lesson.teach,
            'owner': lesson.owner.id
        }
        return success_200(data)
    else:
        return error_404("Lesson does not exist")

@lessons_api_blueprint.route('/<lesson_id>', methods=['POST'])
@jwt_required
def update(lesson_id):
    # Check for valid json
    if not request.is_json:
        return error_401("Reponse is not JSON")

    # Check if user exists and signed in
    jwt_user = get_jwt_identity()
    user = User.get_or_none(User.name == jwt_user) 

    if not user:
        return error_401("Unauthorized action")

    # Retrieve data from json

    data = request.get_json()

    title = data['title']
    description = data['description']
    # Check title and description and then create new lesson
    if title and description:
        lesson = Lesson.update(title=title, description=description).where(Lesson.id==lesson_id).execute()
        if lesson:
            return success_201("Update lesson successfully", lesson)
        else:
            return error_401("Update lesson failed")    
    else:
        return error_401("Invalid title or description")

@lessons_api_blueprint.route('/delete', methods=['POST'])
@jwt_required
def delete():
    pass

