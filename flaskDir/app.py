import flask
from flask import Flask
import flask_excel
app = Flask(__name__)


@app.route("/react")
def reacted():
    return flask.render_template("index.html", token="flask + react")


@app.route("/")
def index():
    return "index.html"


if __name__ == "__main__":
    flask_excel.init_excel(app)
    app.run(debug=True, host='0.0.0.0', port=5000)
