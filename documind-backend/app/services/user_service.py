from sqlalchemy.orm import Session

from app.repositories.user_repository import UserRepository

from app.schemas.user import UserUpdate



class UserService:


    def __init__(self, db: Session):

        self.repository = UserRepository(db)



    def get_user_by_id(
        self,
        user_id: int
    ):

        user = self.repository.get_by_id(user_id)


        if not user:

            raise Exception(
                "User not found"
            )


        return user





    def update_profile(
        self,
        user_id: int,
        data: UserUpdate
    ):


        user = self.repository.get_by_id(
            user_id
        )


        if not user:

            raise Exception(
                "User not found"
            )



        user.firstname = data.firstname

        user.lastname = data.lastname



        return self.repository.update(
            user
        )