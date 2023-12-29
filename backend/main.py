from fastapi import Depends, FastAPI, HTTPException, status
from pydantic import BaseModel
from datetime import datetime, timedelta
from jose import JWTError, jwt
from app.db.database import SessionLocal, Base, SQLALCHEMY_DATABASE_URL
import sqlalchemy
from datetime import datetime, timedelta
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from app.utils.user_crud import get_user
from app.schemas.user import User, Token, TokenData
from sqlalchemy.orm import Session
from app.models.user import User as UserModel  # Importing the SQLAlchemy model
from app.routers.auth import auth_router
from app.routers.chat import chat_router


SECRET_KEY = "83daa0256a2289b0fb23693bf1f6034d44396675749244721a2b20e896e11662"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


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
    engine = sqlalchemy.create_engine(SQLALCHEMY_DATABASE_URL)
    Base.metadata.create_all(bind=engine)



app.include_router(auth_router)
app.include_router(chat_router)
