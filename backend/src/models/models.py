from . import database 
import sqlalchemy as sa

class User(database.Base):
    __tablename__ = "users"
    user_id = sa.Column("user_id",
                        sa.Integer,
                        primary_key=True,
                        autoincrement=True)
    email = sa.Column("email",
                      sa.Text,
                      nullable=False)
    password = sa.Column("password",
                         sa.Text,
                         nullable=False)

class Study(database.Base):
    __tablename__ = "studies"
    id = sa.Column("id",
                   sa.Integer,
                   primary_key=True,
                   autoincrement=True)
    user = sa.Column("user",
                      sa.Text,
                      nullable=False)
    date = sa.Column("date",
                     sa.Text,
                     nullable=False)
    content = sa.Column("content",
                     sa.Text,
                     nullable=False)
    time = sa.Column("time",
                     sa.Text,
                     nullable=False)
    memo = sa.Column("memo",
                     sa.Text,
                     nullable=True)

class StudyContents(database.Base):
    __tablename__ = "study_contents"
    id = sa.Column("id",
                   sa.Integer,
                   primary_key=True,
                   autoincrement=True)
    user = sa.Column("user",
                      sa.Text,
                      nullable=False)
    content = sa.Column("content",
                     sa.Text,
                     nullable=False)

class Objective(database.Base):
    __tablename__ = "objectives"
    id = sa.Column("id",
                   sa.Integer,
                   primary_key=True,
                   autoincrement=True)
    user = sa.Column("user",
                      sa.Text,
                      nullable=False)
    objective = sa.Column("objective",
                     sa.Text,
                     nullable=False)
    deadline = sa.Column("deadline",
                     sa.Text,
                     nullable=False)
    deleteFlag = sa.Column("deleteFlag",
                           sa.Boolean,
                           nullable=False)

class Profile(database.Base):
    __tablename__ = "profiles"
    id = sa.Column("id",
                   sa.Integer,
                   primary_key=True,
                   autoincrement=True)
    email = sa.Column("email",
                      sa.Text,
                      nullable=False)
    username = sa.Column("username",
                     sa.Text,
                     nullable=True)

class TimeLine(database.Base):
    __tablename__ = "timelines"
    id = sa.Column("id",
                   sa.Integer,
                   primary_key=True,
                   autoincrement=True)
    user = sa.Column("user",
                      sa.Text,
                      nullable=False)
    message = sa.Column("message",
                      sa.Text,
                      nullable=True)
    createdAt = sa.Column("createdAt",
                     sa.DateTime,
                     nullable=False)
