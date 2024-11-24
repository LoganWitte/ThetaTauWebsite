from flask import Flask, jsonify, request, redirect, url_for, session
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import mysql.connector

app = Flask(__name__)
app.secret_key = 'your_secret_key'
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)

# Database connection
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="your_username",
        password="your_password",
        database="theta_tau"
    )

class User(UserMixin):
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

@login_manager.user_loader
def load_user(user_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM admins WHERE id = %s", (user_id,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()
    if user:
        return User(user['id'], user['username'], user['password'])
    return None

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM admins WHERE username = %s", (username,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()
    
    if user and bcrypt.check_password_hash(user['password'], password):
        user_obj = User(user['id'], user['username'], user['password'])
        login_user(user_obj)
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logout successful"}), 200

@app.route('/hidden_function')
@login_required
def hidden_function():
    return jsonify({"message": "This is a hidden function accessible only to logged-in users"}), 200

@app.route('/')
def landing_page():
    return "Landing Page"

@app.route('/brothers', methods=['GET'])
def get_brothers():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM brothers")
    brothers = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(brothers)

@app.route('/shop', methods=['GET'])
def get_shop_items():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM shop")
    shop_items = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(shop_items)

@app.route('/faq')
def faq():
    return "FAQ Page"

@app.route('/rush', methods=['GET'])
def get_rush_events():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM rush_events")
    rush_events = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(rush_events)

@app.route('/events')
def events():
    return "Events Page"

@app.route('/about')
def about():
    return "About Page"

@app.route('/<path:path>')
def error_page(path):
    return "Error Page"

@app.route('/add_brother', methods=['POST'])
def add_brother():
    data = request.get_json()
    name = data['name']
    pledge_class = data['pledge_class']
    image = data['image']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO brothers (name, pledge_class, image) VALUES (%s, %s, %s)",
                   (name, pledge_class, image))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Brother added successfully"}), 201

@app.route('/add_shop_item', methods=['POST'])
def add_shop_item():
    data = request.get_json()
    image = data['image']
    product_name = data['product_name']
    price = data['price']
    description = data['description']
    size = data['size']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO shop (image, product_name, price, description, size) VALUES (%s, %s, %s, %s, %s)",
                   (image, product_name, price, description, size))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Shop item added successfully"}), 201

@app.route('/add_rush_event', methods=['POST'])
def add_rush_event():
    data = request.get_json()
    date = data['date']
    time = data['time']
    location = data['location']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO rush_events (date, time, location) VALUES (%s, %s, %s)",
                   (date, time, location))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Rush event added successfully"}), 201

if __name__ == '__main__':
    app.run(debug=True)