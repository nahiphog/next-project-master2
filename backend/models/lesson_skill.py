from models.base_model import BaseModel
from models.lesson import Lesson
from models.skill import Skill
import peewee as pw
from flask_login import UserMixin
from config import Config

class Lesson_Skill(BaseModel):
    lesson = pw.ForeignKeyField(Lesson, backref='lesson_skills', on_delete='CASCADE')
    skill = pw.ForeignKeyField(Skill, backref='lesson_skills', on_delete='CASCADE')