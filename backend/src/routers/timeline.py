from fastapi import APIRouter, Depends
import schemas.timeline as timeline_schema
import schemas.user as user_schema
from crud import timeline as timeline_crud
from services import jwt as jwt_service
from sqlalchemy.orm import Session
from models.database import get_db
from typing import List
import datetime

router = APIRouter()

@router.get("/timelines", summary="List timelines", response_model=List[timeline_schema.Timeline])
def get_timelines(current_user: user_schema.UserBase = Depends(jwt_service.get_current_user), db: Session = Depends(get_db)):
    return timeline_crud.get_timelines(db)

@router.post("/timeline", summary="Create new timeline", response_model=timeline_schema.TimelineCreateResponse)
def create_study(request: timeline_schema.TimelineBase,
                 current_user: user_schema.UserBase = Depends(jwt_service.get_current_user),
                 db: Session = Depends(get_db)):
    timeline = {
        'user': current_user.email,
        'message': request.message,
        'createdAt': datetime.datetime.now()
    }
    return timeline_crud.create_timeline(db, timeline)
