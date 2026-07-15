from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):

    firstname: str

    lastname: str

    email: EmailStr

    password: str



class UserLogin(BaseModel):

    email: EmailStr

    password: str



class UserResponse(BaseModel):

    id: int

    firstname: str

    lastname: str

    email: EmailStr

    role: str

    company_id: int


    class Config:

        from_attributes = True