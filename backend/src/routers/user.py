from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
import schemas.user as user_schema
from sqlalchemy.orm import Session
from crud import user as user_crud
from models.database import get_db
import models.models as model

router = APIRouter()

@router.get("/user/{user_id}", response_model=user_schema.User)
def get_user(user_id: int, db: Session = Depends(get_db)):
    return user_crud.get_user(db, user_id)

@router.get("/users", response_model=List[user_schema.User])
def list_users(db: Session = Depends(get_db)):
    return user_crud.get_users(db)

@router.post("/users", response_model=user_schema.UserCreateResponse)
def create_user(user_body: user_schema.UserCreate, db: Session = Depends(get_db)):
    return user_crud.create_user(db, user_body)


@router.put("/users/{user_id}", response_model=user_schema.User)
def update_user(user_id: int, user_body: user_schema.UserCreate, db: Session = Depends(get_db)):
    user: Optional[model.User] = user_crud.get_user(db, user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User is not found")
    return user_crud.update_user(db, user_body, original=user)


@router.delete("/users/{user_id}", response_model=user_schema.User)
def delete_user(user_id: int, db: Session = Depends(get_db)):
    user: Optional[model.User] = user_crud.get_user(db, user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User is not found")
    return user_crud.delete_user(db, original=user)