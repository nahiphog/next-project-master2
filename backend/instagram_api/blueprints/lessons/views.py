from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity
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

    # Check title and description and then create new lesson
    if title and description:
        lesson = Lesson(title=title, description=description, teach=teach, owner=user)        
        if lesson.save():
            lesson = {
                'id': lesson.id,
                'title': lesson.title,
                'description': lesson.description,
                'rating': lesson.rating,
                'teach': lesson.teach,
                'owner': lesson.user
            }
            success_201("New lesson is successfully create", lesson)
        else:
            error_401("Create lesson failed")    
    else:
        error_401("Invalid title or description")

@lessons_api_blueprint.route('/', methods=['GET'])
@jwt_required
def index():
    # Check if user exists and signed in
    jwt_user = get_jwt_identity()
    user = User.get_or_none(User.id == jwt_user.username)

    if not user:
        error_401("Unauthorized action")

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
        success_200(lessons)
    else:
        error_404("No lessons found")

@lessons_api_blueprint.route('/<lesson_id>', methods=['GET'])
@jwt_required
def show(lesson_id):
    # Check if user exists and signed in
    jwt_user = get_jwt_identity()
    user = User.get_or_none(User.id == jwt_user.username)

    if not user:
        error_401("Unauthorized action")

    # Retrieve particular lesson from database
    lesson = Lesson.select().where(Lesson.id == lesson_id)

    if lesson:
        success_200(lesson)
    else:
        error_404("Lesson does not exist")

@lessons_api_blueprint.route('/<lesson_id>', methods=['POST'])
@jwt_required
def update(lesson_id):
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

    # Check title and description and then create new lesson
    if title and description:
        lesson = Lesson.update(title=title, description=description).where(Lesson.id==lesson_id).execute():
        if lesson:
            success_201("Update lesson successfully", lesson)
        else:
            error_401("Update lesson failed")    
    else:
        error_401("Invalid title or description")

@lessons_api_blueprint.route('/delete', methods=['POST'])
@jwt_required
def delete():
    pass

