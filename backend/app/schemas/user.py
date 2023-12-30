from pydantic import BaseModel


class ItemBase(BaseModel):
    title: str
    description: str | None = None


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str
    


class User(UserBase):
    id: int or None = None
    username: str or None = None
    email: str or None = None
    hashed_password: str or None = None
    full_name: str or None = None
    disabled: bool or None = None
    
    items: list[Item] or None = None

    class Config:
        orm_mode = True
        

class ChatRequest(BaseModel):
    message: str



class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None
    

class RegisterRequest(BaseModel):
    username: str
    password: str
    
    
class LoginGoogleRequest(BaseModel):
    token: str