from flask import Blueprint, jsonify, request
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import pymysql.cursors
import os
import jwt
import datetime
from functools import wraps

SECRET_KEY = "your_secret_key"

app_routes = Blueprint('app_routes', __name__)

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({"error": "Token is missing"}), 403
        try:
            jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired"}), 403
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token"}), 403
        return f(*args, **kwargs)
    return decorated_function

@app_routes.route("/")
def home():
    return "<p>Home</p>"

@app_routes.route("/hello", methods=['GET', 'PUT'])
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

@app_routes.route('/admin_login', methods=['POST'])
def admin_login():
    username = request.form.get('username')
    password = request.form.get('password')
    
    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400
    
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM admins WHERE username = %s", (username,))
            admin = cursor.fetchone()
            
            if admin and Bcrypt().check_password_hash(admin['password'], password):
                token = jwt.encode({
                    'user_id': admin['id'],
                    'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
                }, SECRET_KEY, algorithm='HS256')
                
                return jsonify({"token": token}), 200
            else:
                return jsonify({"error": "Invalid username or password"}), 401

@app_routes.route('/admin_username', methods=['GET'])
def get_admin_username():
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT username FROM admins LIMIT 1")
            admin = cursor.fetchone()
            return jsonify(admin)
    return jsonify({"message": "No admin found"})

@app_routes.route('/brothers', methods=['GET'])
def get_brothers():
    GREEK_ALPHABET_ORDER = {
        'Alpha': 1,
        'Beta': 2,
        'Gamma': 3,
        'Delta': 4,
        'Epsilon': 5,
        'Zeta': 6,
        'Eta': 7,
        'Theta': 8,
        'Iota': 9,
        'Kappa': 10,
        'Lambda': 11,
        'Mu': 12,
        'Nu': 13,
        'Xi': 14,
        'Omicron': 15,
        'Pi': 16,
        'Rho': 17,
        'Sigma': 18,
        'Tau': 19,
        'Upsilon': 20,
        'Phi': 21,
        'Chi': 22,
        'Psi': 23,
        'Omega': 24
    }

    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM brothers")
            brothers = cursor.fetchall()
            
            # Sort brothers by pledge class using Greek alphabet order
            brothers_sorted = sorted(brothers, key=lambda x: GREEK_ALPHABET_ORDER.get(x['pledge_class'].split()[0], float('inf')))
            
            return jsonify(brothers_sorted)
    return jsonify({"error": "Error returning brothers"})

BROTHERS_FOLDER = '/var/www/html/ThetaTauWebsite/backend/static/brothers'
os.makedirs(BROTHERS_FOLDER, exist_ok=True)

@app_routes.route('/add_brother', methods=['POST'])
@admin_required
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

@app_routes.route('/remove_brother', methods=['POST'])
@admin_required
def remove_brother():
    brother_id = request.form.get('id')
    
    if not brother_id:
        return jsonify({"error": "Brother ID is required"}), 400
    
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("DELETE FROM brothers WHERE id = %s", (brother_id,))
            conn.commit()
    
    return jsonify({"message": "Brother removed successfully"}), 200

@app_routes.route('/shop', methods=['GET'])
def get_shop_items():
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM shop")
            shop_items = cursor.fetchall()
            return jsonify(shop_items)
    return jsonify({"error": "Error returning shop items"})

SHOP_FOLDER = '/var/www/html/ThetaTauWebsite/backend/static/shop'
os.makedirs(SHOP_FOLDER, exist_ok=True)

@app_routes.route('/add_shop_item', methods=['POST'])
@admin_required
def add_shop_item():
    if 'image' not in request.files:
        return jsonify({"error": "No image part"}), 400
    
    image = request.files['image']
    if image.filename == '':
        return jsonify({"error": "No selected image"}), 400
    
    product_name = request.form.get('product_name')
    description = request.form.get('description')
    size = request.form.get('size')
    price = request.form.get('price')
    
    if not product_name or not description or not size or not price:
        return jsonify({"error": "Product name, description, size, and price are required"}), 400
    
    try:
        price = float(price)
    except ValueError:
        return jsonify({"error": "Invalid price format"}), 400
    
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
                "INSERT INTO shop (product_name, description, size, price, image) VALUES (%s, %s, %s, %s, %s)",
                (product_name, description, size, price, relative_image_path)
            )
            conn.commit()
    
    return jsonify({"message": "Shop item added successfully"}), 201

@app_routes.route('/remove_shop_item', methods=['POST'])
@admin_required
def remove_shop_item():
    shop_item_id = request.form.get('id')
    
    if not shop_item_id:
        return jsonify({"error": "Shop item ID is required"}), 400
    
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("DELETE FROM shop WHERE id = %s", (shop_item_id,))
            conn.commit()
    
    return jsonify({"message": "Shop item removed successfully"}), 200

@app_routes.route('/update_rush_text', methods=['POST'])
@admin_required
def update_rush_text():
    new_text = request.form.get('text')
    
    if not new_text:
        return jsonify({"error": "Text is required"}), 400
    
    # Update the rush text in the database
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("UPDATE rush_text SET text = %s", (new_text,))
            conn.commit()
    
    return jsonify({"message": "Rush text updated successfully"}), 200

@app_routes.route('/rush', methods=['GET'])
def get_rush_text():
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT text FROM rush_text LIMIT 1")
            rush_text = cursor.fetchone()
            if rush_text:
                return jsonify(rush_text)
            else:
                return jsonify({"error": "No rush text found"}), 404

@app_routes.route('/update_day_info', methods=['POST'])
@admin_required
def update_day_info():
    day = request.form.get('day')
    date = request.form.get('date')
    text = request.form.get('text')
    
    if not day or not date or not text:
        return jsonify({"error": "Day, date, and text are required"}), 400
    
    # Update the day info in the database
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute(
                "UPDATE rush_events SET date = %s, text = %s WHERE day = %s",
                (date, text, day)
            )
            conn.commit()
    
    return jsonify({"message": "Day info updated successfully"}), 200

@app_routes.route('/get_day_info', methods=['GET'])
def get_day_info():
    conn = get_db_connection()
    with conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM rush_events")
            day_info = cursor.fetchall()
            return jsonify(day_info)
    return jsonify({"error": "Error retrieving day info"}), 500
