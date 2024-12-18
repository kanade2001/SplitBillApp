from api.repositories import UserRepository


class UserService:
    @staticmethod
    def create_user(email, username, password):
        return UserRepository.create_user(email, username, password)

    @staticmethod
    def update_user(user, email=None, username=None, password=None):
        return UserRepository.update_user(user, email, username, password)
