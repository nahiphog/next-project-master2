from config import Config
from flask_login import UserMixin
from models.base_model import BaseModel
from models.user import User
import peewee as pw

class Skill(BaseModel):
    user_id = pw.ForeignKeyField(User, backref='skills', on_delete='CASCADE')
    name = pw.CharField(null=False)