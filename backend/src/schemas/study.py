from pydantic import BaseModel

class StudyBase(BaseModel):
    date: str
    content: str
    time: str
    memo: str

class Study(StudyBase):
    user: str
    id: int

    class Config:
        orm_mode = True

class StudyCreate(StudyBase):
    user: str

class StudyUpdate(StudyBase):
    pass

class StudyCreateResponse(StudyCreate):
    id: int

    class Config:
        orm_mode = True

class StudyRequest(BaseModel):
    user: str