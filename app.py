# Imports
from flask import Flask, render_template, jsonify
import requests

# App
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/iss-location")
def iss_location():
    
    response = requests.get("https://api.wheretheiss.at/v1/satellites/25544")
    
    data = response.json()
    
    lat = float(data["latitude"])
    lon = float(data["longitude"])

    return jsonify({"lat": lat, "lon": lon})


if __name__ == "__main__":
    app.run(debug=True)