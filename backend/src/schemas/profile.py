from pydantic import BaseModel

class ProfileBase(BaseModel):
    username: str

class Profile(ProfileBase):
    email: str
    id: int

    class Config:
        orm_mode = True

class ProfileCreate(ProfileBase):
    email: str

class ProfileCreateResponse(ProfileCreate):
    id: int

    class Config:
        orm_mode = True