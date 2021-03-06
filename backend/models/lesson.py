from config import Config
from flask_login import UserMixin
from models.base_model import BaseModel
from models.user import User
from models.skill import Skill
import peewee as pw

class Lesson(BaseModel):
    title = pw.CharField(null=False)
    description = pw.CharField(null=False)
    rating = pw.IntegerField(default=0)
    teach = pw.BooleanField(default = False)
    owner = pw.ForeignKeyField(User, on_delete='CASCADE', backref='lessons')
    skill = pw.ForeignKeyField(Skill, on_delete='CASCADE', backref='lessons')
    image = pw.CharField(null=True)
    