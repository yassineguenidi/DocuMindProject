from sqlalchemy import Column, Integer, String

from app.database import Base



class Company(Base):

    __tablename__="companies"



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
        default="FREE"
    )


    document_limit = Column(
        Integer,
        default=100
    )


    documents_used = Column(
        Integer,
        default=0
    )