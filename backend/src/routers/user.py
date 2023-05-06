from typing import List
from fastapi import APIRouter, Depends
import schemas.user as user_schema
from sqlalchemy.ext.asyncio import AsyncSession
import crud.user as user_crud
from models.database import get_db

router = APIRouter()

@router.get("/users", response_model=List[user_schema.User])
async def list_users():
    return [user_schema.User(user_id=10, name='karasawa', age=24, email='karasawa@gmail.com')]

@router.post("/users", response_model=user_schema.UserCreateResponse)
async def create_user(user_body: user_schema.UserCreate, db: AsyncSession = Depends(get_db)):
    return await user_crud.create_user(db, user_body)


@router.put("/users/{user_id}", response_model=user_schema.UserCreateResponse)
async def update_user(user_id: int, user_body: user_schema.UserCreate):
    return user_schema.UserCreateResponse(user_id=user_id, **user_body.dict())


@router.delete("/users/{user_id}", response_model=None)
async def delete_user(user_id: int):
    return