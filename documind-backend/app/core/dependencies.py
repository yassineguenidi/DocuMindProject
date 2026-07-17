from fastapi import Depends, HTTPException, status
# from fastapi.security import OAuth2PasswordBearer
from fastapi.security import HTTPBearer

from jose import jwt, JWTError

from sqlalchemy.orm import Session

from app.database import get_db
from app.core.config import settings

from app.repositories.user_repository import UserRepository



# oauth2_scheme = OAuth2PasswordBearer(
#     tokenUrl="/api/v1/auth/login"
# )

oauth2_scheme = HTTPBearer()



def get_current_user(
    credentials = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):

    token = credentials.credentials

    try:

        payload = jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM]
        )


        user_id = payload.get("sub")


        if user_id is None:

            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )


    except JWTError:

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )


    repository = UserRepository(db)


    user = repository.get_by_id(
        int(user_id)
    )


    if user is None:

        raise HTTPException(
            status_code=404,
            detail="User not found"
        )


    return user