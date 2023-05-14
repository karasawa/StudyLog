from pydantic import BaseModel

class ObjectiveBase(BaseModel):
    objective: str
    deadline: str

class Objective(ObjectiveBase):
    user: str
    deleteFlag: bool
    id: int

    class Config:
        orm_mode = True

class ObjectiveCreate(ObjectiveBase):
    user: str
    deleteFlag: bool

class ObjectiveCreateResponse(ObjectiveCreate):
    id: int

    class Config:
        orm_mode = True