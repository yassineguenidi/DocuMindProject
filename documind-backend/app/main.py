from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

from app.models import user, company, document

from app.api.v1.health import router as health_router

from app.core.config import settings


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title=settings.APP_NAME
)


app.add_middleware(

    CORSMiddleware,

    allow_origins=["http://localhost:5173"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)


app.include_router(

    health_router,

    prefix="/api/v1"

)