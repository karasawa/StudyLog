from . import database 
import sqlalchemy as sa


class User(database.Base):
    __tablename__ = "users"
    user_id = sa.Column("user_id",
                        sa.Integer,
                        primary_key=True,
                        autoincrement=True)
    name = sa.Column("name",
                     sa.Text,
                     nullable=True)
    age = sa.Column("age",
                    sa.Integer,
                    nullable=True)
    email = sa.Column("email",
                      sa.Text,
                      nullable=False)
    password = sa.Column("password",
                         sa.Text,
                         nullable=False)