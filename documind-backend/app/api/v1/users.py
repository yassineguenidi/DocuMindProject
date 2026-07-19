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

@router.put("/profile")
def update_profile(
    firstname: str,
    lastname: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):


    current_user.firstname = firstname
    current_user.lastname = lastname


    db.commit()
    db.refresh(current_user)


    return current_user



@router.get("/me",
    response_model=UserResponse
)
def get_profile(

    current_user: User = Depends(get_current_user)

):

    return current_user




@router.put("/password")
def change_password(
    old_password: str,
    new_password: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):


    if not verify_password(
        old_password,
        current_user.password_hash
    ):

        raise HTTPException(
            status_code=400,
            detail="Ancien mot de passe incorrect"
        )


    current_user.password_hash = hash_password(
        new_password
    )


    db.commit()


    return {
        "message":
        "Mot de passe modifié"
    }



@router.put("/me",
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