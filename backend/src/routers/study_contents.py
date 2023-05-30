from fastapi import APIRouter, Depends
import schemas.study_contents as study_contents_schema
import schemas.user as user_schema
from crud import study_contents as study_contents_crud
from services import jwt as jwt_service
from sqlalchemy.orm import Session
from models.database import get_db
from typing import List

router = APIRouter()

@router.get("/contents", summary="List study_contents", response_model=List[study_contents_schema.StudyContens])
def get_studies(current_user: user_schema.UserBase = Depends(jwt_service.get_current_user), db: Session = Depends(get_db)):
    return study_contents_crud.get_study_contents(db, current_user)

@router.post("/contents", summary="Create new study_contents", response_model=study_contents_schema.StudyContentsCreateResponse)
def create_study_contents(request: study_contents_schema.StudyContentsBase,
                 current_user: user_schema.UserBase = Depends(jwt_service.get_current_user),
                 db: Session = Depends(get_db)):
    study_contents = {
        'user': current_user.email,
        'content': request.content,
    }
    return study_contents_crud.create_study_contents(db, study_contents)
