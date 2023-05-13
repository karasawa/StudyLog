from pydantic import BaseModel

class StudyContentsBase(BaseModel):
    content: str

class StudyContens(StudyContentsBase):
    user: str
    id: int

    class Config:
        orm_mode = True

class StudyContentsCreate(StudyContentsBase):
    user: str

class StudyContentsCreateResponse(StudyContentsCreate):
    id: int

    class Config:
        orm_mode = True