from fastapi import Depends, APIRouter, HTTPException, status, Body
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from app.db.database import SessionLocal, Base, SQLALCHEMY_DATABASE_URL
import lorem
from app.schemas.user import User, Token, TokenData, RegisterRequest
from app.db.database import get_db
from app.utils import user_crud
from app.models.user import User as UserModel  
from fastapi.security import OAuth2PasswordRequestForm
from app.utils.auth import authenticate_user
from app.utils import auth
from pydantic import BaseModel
from app.models.chat import Chats

chat_router = APIRouter(
    prefix="/chat",
    tags=["chat"],
)   

class ChatRequest(BaseModel):
    message: str
    
class ChatResponse(BaseModel):
    id: int
    content: str

@chat_router.post('/')
async def get_lorem_text(chat_request: ChatRequest, current_user: UserModel = Depends(auth.get_current_active_user)):
    message = chat_request.message
    print(current_user)
    print(message)
    return {"text": lorem.paragraph()}

@chat_router.post("/save")
def save_conversation(conversation_data: ChatRequest, db: Session = Depends(get_db)):
    print(conversation_data)
    new_conversation = Chats(content=conversation_data.message)
    db.add(new_conversation)
    db.commit()
    db.refresh(new_conversation)
    return ChatResponse(id=new_conversation.id, content=new_conversation.content)

@chat_router.get("/{conversation_id}", response_model=ChatResponse)
def get_conversation(conversation_id: int, db: Session = Depends(get_db)):
    conversation = db.query(Chats).filter(Chats.id == conversation_id).first()
    if conversation is None:
        raise HTTPException(status_code=404, detail="Conversation not found")
    return ChatResponse(id=conversation.id, content=conversation.content)


