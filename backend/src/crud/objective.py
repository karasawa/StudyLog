from typing import Optional, List, Tuple
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
import models.models as model
import schemas.objective as objective_schema

def get_objective(
    db: Session, current_user: model.User, deleteFlag: bool
) -> Optional[model.Objective]:
    result: Result = db.query(model.Objective).filter(model.Objective.user == current_user.email, model.Objective.deleteFlag == deleteFlag)
    objective: Optional[Tuple[model.Objective]] = result.first()
    return objective if objective is not None else None

def create_objective(
    db: Session, request: objective_schema.ObjectiveCreate
) -> model.Objective:
    objective = model.Objective(**request)
    db.add(objective)
    db.commit()
    db.refresh(objective)
    return objective

def update_deleteFlag(
    db: Session, objective: model.Objective 
) -> model.Objective:
    objective.deleteFlag = True
    db.add(objective)
    db.commit()
    db.refresh(objective)
    return objective