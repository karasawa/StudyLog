from typing import List, Tuple, Optional
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
from sqlalchemy import select
import models.models as model
import schemas.user as user_schema

def get_user_with_email(
        db: Session, request: user_schema.UserBase
) -> Optional[model.User]:
    result: Result = db.execute(
        select(model.User).filter(model.User.email == request.email)
    )
    user: Optional[Tuple[model.User]] = result.first()
    return user[0] if user is not None else None

def get_user(
        db: Session, user_id: int
) -> Optional[model.User]:
    result: Result = db.execute(
        select(model.User).filter(model.User.user_id == user_id)
    )
    user: Optional[Tuple[model.User]] = result.first()
    return user[0] if user is not None else None

def get_users(db: Session) -> List[Tuple[int, str, int, str, str]]:
    result: Result = db.execute(
        select(
            model.User.user_id,
            model.User.name,
            model.User.age,
            model.User.email,
            model.User.password
        )
    )
    return result.all()

def create_user(
    db: Session, request: user_schema.UserCreate
) -> model.User:
    user = model.User(**request)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def update_user(
    db: Session, user_create: user_schema.UserCreate, original: model.User
) -> model.User:
    original.name = user_create.name
    original.age = user_create.age
    original.email = user_create.email
    original.password = user_create.password
    db.add(original)
    db.commit()
    db.refresh(original)
    return original

def delete_user(
    db: Session, original: model.User
) -> model.User:
    db.delete(original)
    db.commit()
    return original