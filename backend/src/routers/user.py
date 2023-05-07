from typing import List
from fastapi import APIRouter, Depends
import schemas.user as user_schema
from sqlalchemy.orm import Session
import crud.user as user_crud
from models.database import get_db

router = APIRouter()

@router.get("/users", response_model=List[user_schema.User])
async def list_users(db: Session = Depends(get_db)):
    return user_crud.get_users(db)

@router.post("/users", response_model=user_schema.UserCreateResponse)
def create_user(user_body: user_schema.UserCreate, db: Session = Depends(get_db)):
    return user_crud.create_user(db, user_body)


@router.put("/users/{user_id}", response_model=user_schema.UserCreateResponse)
async def update_user(user_id: int, user_body: user_schema.UserCreate):
    return user_schema.UserCreateResponse(user_id=user_id, **user_body.dict())


@router.delete("/users/{user_id}", response_model=None)
async def delete_user(user_id: int):
    return