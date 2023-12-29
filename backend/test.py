import lorem
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from app.models import user
from app.schemas.user import UserCreate, ItemCreate, User, Item, ChatRequest
from app.utils import user_crud
from fastapi.security import OAuth2PasswordRequestForm
from app.auth import tokens
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated
from app.db.database import SessionLocal, Base, SQLALCHEMY_DATABASE_URL
import sqlalchemy
from datetime import datetime, timedelta
from fastapi import Depends, FastAPI, HTTPException, status

app = FastAPI()

app.add_middleware(
CORSMiddleware,
allow_origins=["http://localhost:80","http://localhost:5173","*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    # Conecta a la base de datos y crea las tablas si no existen
    engine = sqlalchemy.create_engine(SQLALCHEMY_DATABASE_URL)
    Base.metadata.create_all(bind=engine)
