from typing import Optional, List, Tuple
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
import models.models as model
import schemas.study as study_schema

def get_study(
    db: Session, id: int
) -> Optional[model.Study]:
    result: Result = db.query(model.Study).filter(model.Study.id == id)
    study: Optional[Tuple[model.Study]] = result.first()
    return study if study is not None else None

def get_studies(
    db: Session, current_user: model.User
) -> List[Tuple[int, str, str, str, str]]:
    result: Result = db.query(model.Study).filter(model.Study.user == current_user.email)
    return result.all()

def create_study(
    db: Session, request: study_schema.StudyCreate
) -> model.Study:
    study = model.Study(**request)
    db.add(study)
    db.commit()
    db.refresh(study)
    return study

def update_study(
    db: Session, request: study_schema.StudyUpdate, original: model.Study 
) -> model.Study:
    original.date = request.date
    original.content = request.content
    original.time = request.time
    db.add(original)
    db.commit()
    db.refresh(original)
    return original

def delete_study(
    db: Session, study: model.Study
) -> model.Study:
    db.delete(study)
    db.commit()
    return study