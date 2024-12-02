from flask import Flask, jsonify, request, redirect, url_for, session
from flask_cors import CORS
from routes import app_routes, bcrypt
app = Flask(__name__)
CORS(app)
bcrypt.init_app(app)
app.register_blueprint(app_routes)
if __name__ == '__main__':
    app.run(debug=True)