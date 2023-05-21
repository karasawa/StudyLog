from pydantic import BaseModel
import datetime

class TimelineBase(BaseModel):
    message: str

class Timeline(TimelineBase):
    user: str
    createdAt: datetime.datetime

    class Config:
        orm_mode = True

class TimelineCreate(TimelineBase):
    user: str
    createdAt: datetime.datetime

class TimelineCreateResponse(TimelineCreate):
    id: int

    class Config:
        orm_mode = True