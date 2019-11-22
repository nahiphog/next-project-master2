from models.base_model import BaseModel
from models.user import User
from models.lesson import Lesson
import peewee as pw
from flask_login import UserMixin
from config import Config

class Chat(BaseModel):
    user = pw.ForeignKeyField(User, backref='chats', on_delete='CASCADE')
    lesson =pw.ForeignKeyField(Lesson, backref ='chats', on_delete='CASCADE')
    content = pw.CharField(null =False)
