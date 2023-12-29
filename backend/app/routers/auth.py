from fastapi import Depends, APIRouter, HTTPException, status, Body
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from app.db.database import SessionLocal, Base, SQLALCHEMY_DATABASE_URL

from app.schemas.user import User, Token, TokenData, RegisterRequest
from app.db.database import get_db
from app.utils import user_crud
from app.models.user import User as UserModel  
from fastapi.security import OAuth2PasswordRequestForm
from app.utils.auth import authenticate_user
from app.utils import auth

auth_router = APIRouter(
    prefix="/auth",
    tags=["auth"],
    responses={404: {"description": "Not found"}},
)

SECRET_KEY = "83daa0256a2289b0fb23693bf1f6034d44396675749244721a2b20e896e11662"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

@auth_router.post('/register', response_model=Token)
async def register(register_request: RegisterRequest, db: Session = Depends(get_db)):
    username = register_request.username
    password = register_request.password

    user = user_crud.get_user(db, username)
    if user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User already exists")

    hashed_password = auth.get_password_hash(password)
    
    new_user = UserModel(username=username, hashed_password=hashed_password)
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": new_user.username}, expires_delta=access_token_expires)
    new_user.disabled = False 

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    # Create a new token for the registered user
    return {"access_token": access_token, "token_type": "bearer", "user": "qweq"}



@auth_router.post("/login", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Incorrect username or password", headers={"WWW-Authenticate": "Bearer"})
    user.disabled = False 
    db.commit()
    db.refresh(user)
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer", "user": user}


@auth_router.get('/users')
async def get_users(db: Session = Depends(get_db), current_user: UserModel = Depends(auth.get_current_active_user)):

    users = db.query(UserModel).all()

    return users



