from fastapi import FastAPI, HttpException, Depends, status
from pydantic import BaseModel
from typing import Annotated
from database import SessionLocal, engine, get_db
from sqlalchemy.orm import Session
import models

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

class UserCreate(BaseModel):
    email: str
    password: str
class UserResponse(BaseModel):
    id: int
    email: str
    is_active: bool

    class Config:
        orm_mode = True
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session,Depends(get_db)]
