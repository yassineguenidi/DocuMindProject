from sqlalchemy.orm import Session

from app.models.user import User
from app.repositories.user_repository import UserRepository

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token
)


class AuthService:


    def __init__(self, db: Session):

        self.user_repository = UserRepository(db)



    def register(
        self,
        firstname: str,
        lastname: str,
        email: str,
        password: str,
        company_id: int
    ):


        existing_user = (
            self.user_repository
            .get_by_email(email)
        )


        if existing_user:

            raise Exception(
                "Email already exists"
            )


        user = User(

            firstname=firstname,

            lastname=lastname,

            email=email,

            password_hash=hash_password(password),

            company_id=company_id

        )


        return self.user_repository.create(user)




    def login(
        self,
        email: str,
        password: str
    ):


        user = (
            self.user_repository
            .get_by_email(email)
        )


        if not user:

            raise Exception(
                "Invalid credentials"
            )


        if not verify_password(
            password,
            user.password_hash
        ):

            raise Exception(
                "Invalid credentials"
            )


        token = create_access_token(

            {
                "sub": str(user.id)

            }

        )


        return token