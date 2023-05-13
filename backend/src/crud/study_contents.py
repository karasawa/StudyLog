from typing import Optional, List, Tuple
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
import models.models as model
import schemas.study_contents as study_contents_schema

def get_study_contents(
    db: Session, current_user: model.User
) -> List[Tuple[int, str, str]]:
    result: Result = db.query(model.StudyContents).filter(model.StudyContents.user == current_user.email)
    print(result)
    return result.all()

def create_study_contents(
    db: Session, request: study_contents_schema.StudyContentsCreate
) -> model.StudyContents:
    study_contents = model.StudyContents(**request)
    db.add(study_contents)
    db.commit()
    db.refresh(study_contents)
    return study_contents
