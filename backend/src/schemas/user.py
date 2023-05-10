from pydantic import BaseModel

class UserBase(BaseModel):
    email: str
    password: str

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