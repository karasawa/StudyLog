from fastapi import APIRouter, Depends
import schemas.objective as objective_schema
import schemas.user as user_schema
from crud import objective as objective_crud
from services import jwt as jwt_service
from sqlalchemy.orm import Session
from models.database import get_db
from typing import Optional

router = APIRouter()

@router.get("/objective", summary="Get objective", response_model=Optional[objective_schema.Objective])
def get_objective(current_user: user_schema.UserBase = Depends(jwt_service.get_current_user), db: Session = Depends(get_db)):
    return objective_crud.get_objective(db, current_user, deleteFlag=False)

@router.post("/objective", summary="Create new objective", response_model=objective_schema.ObjectiveCreateResponse)
def create_objective(request: objective_schema.ObjectiveBase,
                     current_user: user_schema.UserBase = Depends(jwt_service.get_current_user),
                     db: Session = Depends(get_db)):
    old_objective = objective_crud.get_objective(db, current_user, deleteFlag=False)
    if old_objective is not None:
        objective_crud.update_deleteFlag(db, old_objective)
    new_objective = {
        'user': current_user.email,
        'objective': request.objective,
        'deadline': request.deadline,
        'deleteFlag': False,
    }
    return objective_crud.create_objective(db, new_objective)
