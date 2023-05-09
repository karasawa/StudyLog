from fastapi import APIRouter, Depends
import schemas.study as study_schema
from crud import study as study_crud
from sqlalchemy.orm import Session
from models.database import get_db
from typing import List

router = APIRouter()

@router.get("/studies", summary="List studies", response_model=List[study_schema.Study])
def get_studies(request: study_schema.StudyRequest, db: Session = Depends(get_db)):
    return study_crud.get_studies(db, request)

@router.post("/study", summary="Create new study", response_model=study_schema.StudyCreateResponse)
def create_study(request: study_schema.StudyCreate, db: Session = Depends(get_db)):
    return study_crud.create_study(db, request)
