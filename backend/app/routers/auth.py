import requests
from datetime import timedelta
from sqlalchemy.orm import Session

from fastapi.security import OAuth2PasswordRequestForm
from fastapi import Depends, APIRouter, HTTPException, status

from app.db.database import get_db
from app.schemas.user import RegisterRequest, LoginGoogleRequest, Token
from app.models.user import User as UserModel
from app.utils import user_crud, auth

# Constantes y configuraciones
GOOGLE_CLIENT_ID = "589006822818-hqqkcncp1fl8c6h4eic8hap83c8emhf7.apps.googleusercontent.com"
SECRET_KEY = "83daa0256a2289b0fb23693bf1f6034d44396675749244721a2b20e896e11662"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Router de autenticación
auth_router = APIRouter(
    prefix="/auth",
    tags=["auth"],
    responses={404: {"description": "Not found"}},
)

# Función auxiliar para generar token
def create_access_token_for_user(user: UserModel) -> Token:
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": auth.create_access_token(
            data={"sub": user.username}, expires_delta=access_token_expires),
        "token_type": "bearer",
        "user": user
    }

# Endpoints de autenticación
@auth_router.post('/register', response_model=Token)
async def register(register_request: RegisterRequest, db: Session = Depends(get_db)):
    user = user_crud.get_user(db, register_request.username)
    if user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User already exists")

    hashed_password = auth.get_password_hash(register_request.password)
    new_user = UserModel(username=register_request.username, hashed_password=hashed_password, disabled=False)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return create_access_token_for_user(new_user)

@auth_router.post("/login", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = auth.authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Incorrect username or password", headers={"WWW-Authenticate": "Bearer"})
    return create_access_token_for_user(user)

@auth_router.post("/google", response_model=Token)
async def google_login(token: LoginGoogleRequest, db: Session = Depends(get_db)):
    token_string = token.token.strip('"')
    response = requests.get(f'https://oauth2.googleapis.com/tokeninfo?id_token={token_string}')
    token_info = response.json()

    if token_info['aud'] != GOOGLE_CLIENT_ID:
        raise HTTPException(status_code=401, detail="Invalid Google token")

    user = user_crud.get_user_by_email(db, email=token_info['email'])
    if not user:
        hashed_password = auth.get_password_hash(token_info['email'])
        user = UserModel(username=token_info['name'], email=token_info['email'], hashed_password=hashed_password, disabled=False)
        db.add(user)
        db.commit()
        db.refresh(user)

    return create_access_token_for_user(user)

@auth_router.get('/users')
async def get_users(db: Session = Depends(get_db)):
    return db.query(UserModel).all()
