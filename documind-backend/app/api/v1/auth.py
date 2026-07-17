from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db

from fastapi import Depends

from app.core.dependencies import get_current_user

from app.models.user import User

from app.schemas.auth import (
    RegisterRequest,
    LoginRequest,
    TokenResponse
)

from app.services.auth_service import AuthService


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)



@router.post("/register")
def register(
    data: RegisterRequest,
    db: Session = Depends(get_db)
):

    service = AuthService(db)


    try:

        user = service.register(

            firstname=data.firstname,

            lastname=data.lastname,

            email=data.email,

            password=data.password,

            company_id=data.company_id

        )


        return {

            "success": True,

            "message": "User created",

            "data": {

                "id": user.id,

                "email": user.email

            }

        }


    except Exception as e:

        raise HTTPException(

            status_code=400,

            detail=str(e)

        )




@router.post(
    "/login",
    response_model=TokenResponse
)
def login(
    data: LoginRequest,
    db: Session = Depends(get_db)
):

    service = AuthService(db)


    try:

        token = service.login(

            data.email,

            data.password

        )


        return {

            "access_token": token,

            "token_type": "bearer"

        }


    except Exception as e:

        raise HTTPException(

            status_code=401,

            detail=str(e)

        )
    

@router.get("/me")
def get_me(
    current_user: User = Depends(get_current_user)
):

    return {
        "id": current_user.id,
        "firstname": current_user.firstname,
        "lastname": current_user.lastname,
        "email": current_user.email,
        "role": current_user.role,
        "company_id": current_user.company_id
    }    