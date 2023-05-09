from typing import Optional, List, Tuple
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
from sqlalchemy import select
import models.models as model
import schemas.study as study_schema

def get_studies(
        db: Session, request: study_schema.StudyRequest
) -> Optional[List[Tuple[int, str, str, str, str]]]:
    result: Result = db.execute(
        select(model.Study).filter(model.Study.user == request.user)
    )
    return result.all()

def create_study(
    db: Session, request: study_schema.StudyCreate
) -> model.Study:
    print(request)
    study = model.Study(**request)
    db.add(study)
    db.commit()
    db.refresh(study)
    return study