from app import app
from flask import render_template
from instagram_api.blueprints.users.views import users_api_blueprint
from instagram_api.blueprints.sessions.views import sessions_api_blueprint
from flask_assets import Environment, Bundle
from .util.assets import bundles

assets = Environment(app)
assets.register(bundles)

app.register_blueprint(users_api_blueprint, url_prefix="/users_api")
app.register_blueprint(sessions_api_blueprint, url_prefix="/sessions_api")

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500


@app.route("/")
def home():
    return render_template('home.html')
