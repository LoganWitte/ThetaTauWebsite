from flask import Blueprint, jsonify
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import pymysql.cursors

app_routes = Blueprint('app_routes',__name__)

@app_routes.route("/")
def home():
    return "<p>Home</p>"

@app_routes.route("/hello",methods=['GET','PUT'])
def hello_world():
    return "<p>Hello, World!</p>"

# Database connection
def get_db_connection():
    return pymysql.connect(
        host="localhost",
        user="ThetaTau",
        password="ThetaTau2024!",
        database="theta_tau",
        cursorclass=pymysql.cursors.DictCursor
    )

class User(UserMixin):
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password


@app_routes.route('/admin_username', methods=['GET'])
def get_admin_username():
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT username FROM admins LIMIT 1")
            admin = cursor.fetchone()
            return(admin)
    return ("message No admin found")

@app_routes.route('/brothers', methods=['GET'])
def get_brothers():
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM brothers")
            brothers = cursor.fetchall()
            return jsonify(brothers)
    return ("error returning brohters")