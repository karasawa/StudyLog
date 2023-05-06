from pydantic import BaseModel

class UserBase(BaseModel):
    name: str
    age: int
    email: str

    class Config:
        orm_mode = True