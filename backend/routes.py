from flask import Blueprint, jsonify, request
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import pymysql.cursors
import os

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

BROTHERS_FOLDER = os.path.join(os.getcwd(), 'images', 'brothers')
os.makedirs(BROTHERS_FOLDER, exist_ok=True)

@app_routes.route('/add_brother', methods=['POST'])
def add_brother():
    if 'image' not in request.files:
        return jsonify({"error": "No image part"}), 400
    
    image = request.files['image']
    if image.filename == '':
        return jsonify({"error": "No selected image"}), 400
    
    name = request.form.get('name')
    pledge_class = request.form.get('pledge_class')
    
    if not name or not pledge_class:
        return jsonify({"error": "Name and pledge class are required"}), 400
    
    # Save the image to the brothers folder
    image_path = os.path.join(BROTHERS_FOLDER, image.filename)
    image.save(image_path)
    
    # Insert the new brother into the database
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute(
                "INSERT INTO brothers (name, pledge_class, image) VALUES (%s, %s, %s)",
                (name, pledge_class, image_path)
            )
            conn.commit()
    
    return jsonify({"message": "Brother added successfully"}), 201