from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session


from app.database import get_db

from app.core.dependencies import get_current_user

from app.models.user import User

from app.schemas.user import (
    UserResponse,
    UserUpdate
)

from app.services.user_service import UserService



router = APIRouter(
    prefix="/users",
    tags=["Users"]
)





@router.get(
    "/me",
    response_model=UserResponse
)
def get_profile(

    current_user: User = Depends(get_current_user)

):

    return current_user







@router.put(
    "/me",
    response_model=UserResponse
)
def update_profile(

    data: UserUpdate,

    current_user: User = Depends(get_current_user),

    db: Session = Depends(get_db)

):


    service = UserService(db)



    try:

        return service.update_profile(

            current_user.id,

            data

        )


    except Exception as e:


        raise HTTPException(

            status_code=400,

            detail=str(e)

        )