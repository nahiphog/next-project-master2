from models.base_model import BaseModel
from models.user import User
import peewee as pw
from flask_login import UserMixin
from config import Config

class Skill(BaseModel):
    user_id = pw.ForeignKeyField(User, backref='skills', on_delete='CASCADE')
    name = pw.CharField(null=False)