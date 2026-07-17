from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database import Base


class Company(Base):

    __tablename__ = "companies"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String,
        nullable=False
    )

    plan = Column(
        String,
        default="FREE",
        nullable=False
    )

    document_limit = Column(
        Integer,
        default=100,
        nullable=False
    )

    documents_used = Column(
        Integer,
        default=0,
        nullable=False
    )

    users = relationship(
        "User",
        back_populates="company",
        cascade="all, delete-orphan"
    )

    documents = relationship(
        "Document",
        back_populates="company",
        cascade="all, delete-orphan"
    )