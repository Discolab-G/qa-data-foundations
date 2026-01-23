from flask import Flask, jsonify, render_template_string
import sqlite3
import json

app = Flask(__name__)

# Initialize database (runs once when app starts)
def init_db():
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)''')
    c.execute("INSERT OR IGNORE INTO users (name, age) VALUES ('Alice', 25), ('Bob', 30)")
    conn.commit()
    conn.close()

init_db()

@app.route('/')
def home():
    # Fetch data from SQL database
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users")
    users = c.fetchall()
    conn.close()

    # Generate simple HTML to display the data
    html = """
    <!DOCTYPE html>
    <html>
    <head><title>SQL & JSON Demo</title></head>
    <body>
        <h1>Users from Database</h1>
        <ul>
    """
    for user in users:
        html += f"<li>ID: {user[0]}, Name: {user[1]}, Age: {user[2]}</li>"
    html += """
        </ul>
        <p><a href="/json">View as JSON</a></p>
    </body>
    </html>
    """
    return html

@app.route('/json')
def get_json():
    # Fetch data and return as JSON
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    c.execute("SELECT * FROM users")
    users = c.fetchall()
    conn.close()

    # Convert to JSON format
    users_list = [{"id": u[0], "name": u[1], "age": u[2]} for u in users]
    return jsonify(users_list)

@app.route('/add/<name>/<int:age>')
def add_user(name, age):
    # Add a new user to the database
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    c.execute("INSERT INTO users (name, age) VALUES (?, ?)", (name, age))
    conn.commit()
    conn.close()
    return f"Added user: {name}, Age: {age}. <a href='/'>Back to home</a>"

@app.route('/delete/<int:user_id>')
def delete_user(user_id):
    # Delete a user by ID
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    c.execute("DELETE FROM users WHERE id = ?", (user_id,))
    conn.commit()
    conn.close()
    return f"Deleted user with ID: {user_id}. <a href='/'>Back to home</a>"