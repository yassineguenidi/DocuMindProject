from sqlalchemy import Column, Integer, String, ForeignKey, DateTime

from datetime import datetime

from app.database import Base



class Document(Base):

    __tablename__="documents"



    id = Column(
        Integer,
        primary_key=True
    )


    name = Column(
        String
    )


    file_path = Column(
        String
    )


    document_type = Column(
        String
    )


    status = Column(
        String,
        default="UPLOADING"
    )


    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


    company_id = Column(
        Integer,
        ForeignKey("companies.id")
    )