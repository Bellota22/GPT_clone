from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.db.database import Base

class Chats(Base):
    __tablename__ = "chats"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text)