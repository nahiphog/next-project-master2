from config import Config
from flask_login import UserMixin
from models.base_model import BaseModel
from models.lesson import Lesson
from models.user import User
import peewee as pw

class Request(BaseModel):
    lesson = pw.ForeignKeyField(Lesson, backref='requests', on_delete='CASCADE')
    user = pw.ForeignKeyField(User, backref='requests', on_delete='CASCADE')
    status = pw.CharField(default='Pending')
    rating = pw.IntegerField(null=True)
    start_datetime = pw.DateTimeField(null=False)
    comment = pw.CharField(null=True)