from typing import Tuple, Optional
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
from sqlalchemy import select
import models.models as model
import schemas.profile as profile_schema

def get_profile(
    db: Session, current_user: model.User
) -> Optional[model.Profile]:
    result: Result = db.query(model.Profile).filter(model.Profile.email == current_user.email)
    profile: Optional[Tuple[model.Profile]] = result.first()
    return profile if profile is not None else None

def create_profile(
    db: Session, request: profile_schema.ProfileCreate
) -> model.Profile:
    profile = model.Profile(**request)
    db.add(profile)
    db.commit()
    db.refresh(profile)
    return profile

def update_profile(
    db: Session, profile: model.Profile, request: profile_schema.ProfileBase
) -> model.Profile:
    print('aa')
    profile.username = request.username
    db.add(profile)
    db.commit()
    db.refresh(profile)
    return profile
