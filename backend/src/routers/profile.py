from fastapi import APIRouter, Depends, HTTPException
import schemas.profile as profile_schema
import schemas.user as user_schema
from crud import profile as profile_crud
from services import jwt as jwt_service
from sqlalchemy.orm import Session
from models.database import get_db
from typing import List, Optional
import models.models as model

router = APIRouter()

@router.get("/profile", summary="Get Profile", response_model=profile_schema.Profile)
def get_profile(current_user: user_schema.UserBase = Depends(jwt_service.get_current_user), db: Session = Depends(get_db)):
    return profile_crud.get_profile(db, current_user)

@router.put("/profile", summary="Update profile", response_model=profile_schema.Profile)
def update_profile(request: profile_schema.ProfileBase,
                 current_user: user_schema.UserBase = Depends(jwt_service.get_current_user),
                 db: Session = Depends(get_db)):
    old_profile = profile_crud.get_profile(db, current_user)
    if old_profile is None:
        raise HTTPException(status_code=404, detail="profile is not found")
    return profile_crud.update_profile(db, old_profile, request)
