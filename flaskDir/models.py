from flask import jsonify
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



class Article(db.Model):
    __tablename__ = "Articles"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    authors = db.Column(db.String())
    date = db.Column(db.String())
    preview = db.Column(db.String())
    content = db.Column(db.String())

    def __init__(self, title, authors, date, preview, content):
        self.title = title
        self.authors = authors
        self.date = date
        self.preview = preview
        self.content = content

    def __repr__(self):
        return 'id = {}'.format(self.id)

    def get_fields(self):
        # print("models: title - " + self.title +
        # "authors - " + self.authors +
        # "date - " + self.date +
        # "preview - " + self.preview +
        # "content - " + self.content)
        return {"title": self.title,
                        "authors": self.authors,
                        "date": self.date,
                        "preview": self.preview,
                        "content": self.content,
                        "id": self.id}