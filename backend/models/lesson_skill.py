from config import Config
from flask_login import UserMixin
from models.base_model import BaseModel
from models.lesson import Lesson
from models.skill import Skill
import peewee as pw

class Lesson_Skill(BaseModel):
    lesson = pw.ForeignKeyField(Lesson, backref='lesson_skills', on_delete='CASCADE')
    skill = pw.ForeignKeyField(Skill, backref='lesson_skills', on_delete='CASCADE')