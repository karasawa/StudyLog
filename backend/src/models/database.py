import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession

POSTGRES_USER = os.environ.get('POSTGRES_USER', 'root')
POSTGRES_PASSWORD = os.environ.get('POSTGRES_PASSWORD', 'password')
POSTGRES_SERVER = os.environ.get('POSTGRES_SERVER', 'postgres')
POSTGRES_PORT = os.environ.get('POSTGRES_PORT', '5432')
POSTGRES_DB = os.environ.get('POSTGRES_DB', 'postgres')

SQLALCHEMY_DATABASE_URL = "postgresql://{0}:{1}@{2}:{3}/{4}".format(
    POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_SERVER, POSTGRES_PORT, POSTGRES_DB
)
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

async def get_db():
    async with SessionLocal() as session:
        yield session