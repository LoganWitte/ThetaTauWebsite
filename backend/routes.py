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

BROTHERS_FOLDER = '/var/www/html/ThetaTauWebsite/backend/static/brothers'
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
    
    # Construct the relative image path
    relative_image_path = f"/ThetaTauWebsite/backend/static/brothers/{image.filename}"
    
    # Insert the new brother into the database
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute(
                "INSERT INTO brothers (name, pledge_class, image) VALUES (%s, %s, %s)",
                (name, pledge_class, relative_image_path)
            )
            conn.commit()
    
    return jsonify({"message": "Brother added successfully"}), 201

@app_routes.route('/shop', methods=['GET'])
def get_shop_items():
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM shop")
            shop_items = cursor.fetchall()
            return jsonify(shop_items)
    return ("error returning shop items")

SHOP_FOLDER = '/var/www/html/ThetaTauWebsite/backend/static/shop'
os.makedirs(SHOP_FOLDER, exist_ok=True)

@app_routes.route('/add_shop_item', methods=['POST'])
def add_shop_item():
    if 'image' not in request.files:
        return jsonify({"error": "No image part"}), 400
    
    image = request.files['image']
    if image.filename == '':
        return jsonify({"error": "No selected image"}), 400
    
    product_name = request.form.get('product_name')
    description = request.form.get('description')
    size = request.form.get('size')
    
    if not product_name or not description or not size:
        return jsonify({"error": "Product name, description, and size are required"}), 400
    
    # Save the image to the shop folder
    image_path = os.path.join(SHOP_FOLDER, image.filename)
    image.save(image_path)
    
    # Construct the relative image path
    relative_image_path = f"/ThetaTauWebsite/backend/static/shop/{image.filename}"
    
    # Insert the new shop item into the database
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute(
                "INSERT INTO shop (product_name, description, size, image) VALUES (%s, %s, %s, %s)",
                (product_name, description, size, relative_image_path)
            )
            conn.commit()
    
    return jsonify({"message": "Shop item added successfully"}), 201