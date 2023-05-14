from fastapi import APIRouter, Depends, HTTPException
import schemas.objective as objective_schema
import schemas.user as user_schema
from crud import objective as objective_crud
from services import jwt as jwt_service
from sqlalchemy.orm import Session
from models.database import get_db
from typing import List, Optional
import models.models as model

router = APIRouter()

@router.post("/objective", summary="Create new objective", response_model=objective_schema.ObjectiveCreateResponse)
def create_objective(request: objective_schema.ObjectiveBase,
                 current_user: user_schema.UserBase = Depends(jwt_service.get_current_user),
                 db: Session = Depends(get_db)):
    objective = {
        'user': current_user.email,
        'objective': request.objective,
        'deadline': request.deadline,
        'deleteFlag': False,
    }
    return objective_crud.create_objective(db, objective)
