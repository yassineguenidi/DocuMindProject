from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship

from datetime import datetime

from app.database import Base


class Document(Base):

    __tablename__ = "documents"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    name = Column(
        String,
        nullable=False
    )


    file_path = Column(
        String,
        nullable=False
    )


    document_type = Column(
        String,
        nullable=False
    )


    status = Column(
        String,
        default="UPLOADING",
        nullable=False
    )


    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )


    company_id = Column(
        Integer,
        ForeignKey("companies.id"),
        nullable=False
    )


    company = relationship(
        "Company",
        back_populates="documents"
    )