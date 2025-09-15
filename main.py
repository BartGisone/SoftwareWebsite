from fastapi import FastAPI, HttpException, Depends, status
from pydantic import BaseModel
from typing import List
from database import SessionLocal, engine, get_db
from sqlalchemy.orm import Session
import models

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

