from typing import List, Tuple
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
from sqlalchemy import select
import models.models as model
import schemas.user as user_schema

def get_users(db: Session) -> List[Tuple[int, str, int, str]]:
    result: Result = db.execute(
        select(
            model.User.user_id,
            model.User.name,
            model.User.age,
            model.User.email
        )
    )
    return result.all()

def create_user(
    db: Session, user_create: user_schema.UserCreate
) -> model.User:
    user = model.User(**user_create.dict())
    db.add(user)
    db.commit()
    db.refresh(user)
    return user