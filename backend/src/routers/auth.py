from fastapi import APIRouter, status, HTTPException, Depends
from fastapi.responses import RedirectResponse
import models.models as model
import schemas.user as user_schema
import schemas.jwt as jwt_schema
from services.jwt import get_hashed_password
from crud import user as user_crud
from sqlalchemy.orm import Session
from models.database import get_db
from typing import Optional
from services.jwt import (
    get_hashed_password,
    create_access_token,
    create_refresh_token,
    verify_password
)

router = APIRouter()

@router.post("/signup", summary="Create new user", response_model=user_schema.UserCreateResponse)
def signup(request: user_schema.UserCreate, db: Session = Depends(get_db)):
    user: Optional[model.User] = user_crud.get_user_with_email(db, request)
    if user is not None:
            raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exist"
        )
    user = {
        'email': request.email,
        'password': get_hashed_password(request.password),
    }
    return user_crud.create_user(db, user)

@router.post('/login', summary="Create access and refresh tokens for user", response_model=jwt_schema.TokenBase)
def login(request: user_schema.UserBase, db: Session = Depends(get_db)):
    user: Optional[model.User] = user_crud.get_user_with_email(db, request)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )
    hashed_pass = user.password
    if not verify_password(request.password, hashed_pass):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )
    return {
        "access_token": create_access_token(user.email),
        "refresh_token": create_refresh_token(user.email),
    }
