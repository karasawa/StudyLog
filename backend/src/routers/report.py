from fastapi import APIRouter, Depends
import schemas.user as user_schema
import schemas.report as report_schema
from crud import study as study_crud
from crud import study_contents as study_contents_crud
from services import jwt as jwt_service
from sqlalchemy.orm import Session
from models.database import get_db
from services import report as report_service

router = APIRouter()

@router.get("/report", summary="Get report", response_model=report_schema.ReportBase)
def get_report(current_user: user_schema.UserBase = Depends(jwt_service.get_current_user), db: Session = Depends(get_db)):
    study_list = study_crud.get_studies(db, current_user)
    study_contents_list = study_contents_crud.get_study_contents(db, current_user)
    return report_service.plot_report(study_list, study_contents_list)