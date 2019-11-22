from flask import Flask, flash, url_for, redirect, render_template, Blueprint


sessions_blueprint = Blueprint('sessions', __name__, template_folder='templates')

