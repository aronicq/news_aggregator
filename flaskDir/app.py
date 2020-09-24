from bs4 import BeautifulSoup
import flask
import requests
from flask import Flask
import flask_excel
from flask.json import jsonify
import json
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models import Article, db

app = Flask(__name__)
app.config.update({"SQLALCHEMY_DATABASE_URI": "postgresql://postgres:postgres@postgres.aggr:5432/",
            "SQLALCHEMY_TRACK_MODIFICATIONS": False})
db.init_app(app)


engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'], echo=False)
SessionMaker = sessionmaker(bind=engine)

with app.app_context():
    db.create_all()
    # db.session.commit()


def parse_content(title_col, auth_col, date_col, pre_col, html):
    title = authors = date = preview = ""
    title = html.find(class_=title_col)

    h = requests.get(title["href"]).content
    content = BeautifulSoup(h, 'html.parser').find(class_="post-details clearfix")
    # print("parse: " + str(content))

    title = title.next_element.strip("\n")
    authors = html.find(class_=auth_col)
    authors = authors.next_element.lstrip("by ").strip("\n")
    date = html.find(class_=date_col)
    date = date.next_element.strip("\n")
    preview = html.find(class_=pre_col)
    preview = preview.next_element.strip("\n")

    return {"title": title,
            "authors": authors,
            "date": date,
            "preview": preview,
            "content": content.text}


def to_dict(row):
    return {"title": row["title"],
            "authors": row["authors"],
            "date": row["date"],
            "preview": row["preview"],
            "content": row["content"],
            "id": row["id"]}


@app.route("/news/api/get")
def reacted():
    session = SessionMaker()
    result = session.query(Article).all()
    #db.session.query(Article).all()
    # print("api/get: " + str(result[0].title))
    return jsonify({"articles": [Article.get_fields(r) for r in result]})


@app.route("/news/api/parse")
def news():
    def dict_to_args(constr, d):
        return constr(title=d["title"],
                      authors=d["authors"],
                      date=d["date"],
                      preview=d["preview"],
                      content=d["content"],
                      )

    html = requests.get("https://www.greenpeace.org/international/story/").content
    result = BeautifulSoup(html, 'html.parser').find_all(class_="search-result-list-item")
    resultlist = []

    for i in result:
        temp = parse_content("search-result-item-headline", "search-result-item-author", "search-result-item-date",
                             "search-result-item-content", i)
        # print(temp)
        resultlist.append(temp)

        try:
            # print(json.dumps(temp))
            db.session.add(dict_to_args(constr=Article, d=temp))
            db.session.commit()
        finally:
            db.session.close()

        temp = ""

    return "ok"


@app.route("/news")
def index():
    return flask.render_template("index.html")


if __name__ == "__main__":
    flask_excel.init_excel(app)
    app.run(debug=True, host='0.0.0.0', port=8080)
