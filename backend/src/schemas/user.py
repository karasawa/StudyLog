from typing import Optional
from pydantic import BaseModel, Field

class UserBase(BaseModel):
    name: str
    age: int
    email: str

class User(UserBase):
    user_id: int

    class Config:
        orm_mode = True

class UserCreate(UserBase):
    pass

class UserCreateResponse(UserCreate):
    user_id: int

    class Config:
        orm_mode = True

