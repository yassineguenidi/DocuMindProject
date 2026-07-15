from sqlalchemy import Column, Integer, String, ForeignKey

from app.database import Base



class User(Base):

    __tablename__="users"



    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    firstname = Column(
        String
    )


    lastname = Column(
        String
    )


    email = Column(
        String,
        unique=True,
        index=True
    )


    password_hash = Column(
        String
    )


    role = Column(
        String,
        default="USER"
    )


    company_id = Column(
        Integer,
        ForeignKey("companies.id")
    )