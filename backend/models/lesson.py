from models.base_model import BaseModel
from models.user import User
import peewee as pw
from flask_login import UserMixin
from config import Config

class Lesson(BaseModel):
    title = pw.CharField(null=False)
    description = pw.CharField(null=False)
    rating = pw.IntegerField(default=0)
    teach = pw.BooleanField(default = False)
    owner = pw.ForeignKeyField(User, on_delete='CASCADE', backref='lessons')
    