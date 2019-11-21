from models.base_model import BaseModel
import peewee as pw
from flask_login import UserMixin
from config import Config
from sqlalchemy.ext.hybrid import hybrid_property


class User(BaseModel, UserMixin):
    name=pw.CharField(uniue=False, null=False)
    email = pw.CharField(unique=True, null=False)
    password = pw.CharField(null=False)
    profile_picture = pw.CharField(default='https://www.medaid.co.uk/wp-content/uploads/2019/04/default.jpg')
