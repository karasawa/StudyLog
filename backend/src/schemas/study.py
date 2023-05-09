from pydantic import BaseModel

class StudyBase(BaseModel):
    user: str
    date: str
    content: str
    time: str

class Study(StudyBase):
    id: int

    class Config:
        orm_mode = True

class StudyCreate(StudyBase):
    pass

class StudyCreateResponse(StudyCreate):
    id: int

    class Config:
        orm_mode = True

class StudyRequest(BaseModel):
    user: str