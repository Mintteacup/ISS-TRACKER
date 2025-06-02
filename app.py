# Imports
from flask import Flask

# App
app = Flask(__name__)

@app.route("/")
def index():
    return "<p>Hello, World!</p>"

if __name__ in "__main__":
    app.run(debug=True)