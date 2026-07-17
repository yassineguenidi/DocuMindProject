from fastapi import Depends
from sqlalchemy.orm import Session

from app.database import get_db

from app.repositories.user_repository import UserRepository
from app.repositories.company_repository import CompanyRepository
from app.repositories.document_repository import DocumentRepository


def get_user_repository(
    db: Session = Depends(get_db)
):

    return UserRepository(db)


def get_company_repository(
    db: Session = Depends(get_db)
):

    return CompanyRepository(db)


def get_document_repository(
    db: Session = Depends(get_db)
):

    return DocumentRepository(db)