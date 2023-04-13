from flask import Flask
from flask_cors import CORS
from flask_restful import Api


app = Flask(__name__)
CORS(app, origins=["*"])
api = Api(app)


if __name__ == '__main__':
    app.run(debug=True, port=8080)