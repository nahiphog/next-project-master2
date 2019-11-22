from app import app
from flask_cors import CORS

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

## API Routes ##
from instagram_api.blueprints.users.views import users_api_blueprint
from instagram_api.blueprints.sessions.views import sessions_api_blueprint
from instagram_api.blueprints.lessons.views import lessons_api_blueprint
# from instagram_api.blueprints.chats.views import chats_api_blueprint



app.register_blueprint(users_api_blueprint, url_prefix='/api/v1/users')
app.register_blueprint(sessions_api_blueprint, url_prefix='/api/v1/sessions')
app.register_blueprint(lessons_api_blueprint, url_prefix='/api/v1/lessons')
# app.register_blueprint(chats_api_blueprint, url_prefix='/api/v1/chats')

