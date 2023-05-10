from fastapi import APIRouter, Depends, HTTPException
import schemas.study as study_schema
import schemas.user as user_schema
from crud import study as study_crud
from services import jwt as jwt_service
from sqlalchemy.orm import Session
from models.database import get_db
from typing import List, Optional
import models.models as model

router = APIRouter()

@router.get("/studies", summary="List studies", response_model=List[study_schema.Study])
def get_studies(current_user: user_schema.UserBase = Depends(jwt_service.get_current_user), db: Session = Depends(get_db)):
    return study_crud.get_studies(db, current_user)

@router.post("/study", summary="Create new study", response_model=study_schema.StudyCreateResponse)
def create_study(request: study_schema.StudyCreate, db: Session = Depends(get_db)):
    study = {
        'user': request.user,
        'date': request.date,
        'content': request.content,
        'time': request.time
    }
    return study_crud.create_study(db, study)

@router.put("/study/{id}", response_model=study_schema.Study)
def update_study(id: int, request: study_schema.StudyUpdate, db: Session = Depends(get_db)):
    study: Optional[model.Study] = study_crud.get_study(db, id)
    if study is None:
        raise HTTPException(status_code=404, detail="Study report is not found")
    return study_crud.update_study(db, request, original=study)

@router.delete("/study/{id}", response_model=study_schema.Study)
def delete_study(id: int, db: Session = Depends(get_db)):
    study: Optional[model.Study] = study_crud.get_study(db, id)
    if study is None:
        raise HTTPException(status_code=404, detail="Study report is not found")
    return study_crud.delete_study(db, study)