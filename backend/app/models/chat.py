from app.db.database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Text

class Chats(Base):
    __tablename__ = "chats"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text)