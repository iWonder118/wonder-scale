from flask import Flask, jsonify
from flask_cors import CORS 


app = Flask(__name__)
CORS(app)


@app.route("/hello")
def hello():
    return jsonify({"message": "hello"})


@app.route("/goodbye")
def goodbye():
    return jsonify({"message": "goodbye"})


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
