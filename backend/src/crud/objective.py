from typing import Optional, List, Tuple
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
import models.models as model
import schemas.objective as objective_schema

def create_objective(
    db: Session, request: objective_schema.ObjectiveCreate
) -> model.Objective:
    objective = model.Objective(**request)
    db.add(objective)
    db.commit()
    db.refresh(objective)
    return objective
