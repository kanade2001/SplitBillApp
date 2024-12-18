from api.models import User


class UserRepository:
    @staticmethod
    def create_user(email, username, password):
        user = User(email=email, username=username)
        user.set_password(password)
        user.save()
        return user

    @staticmethod
    def update_user(user, email, username, password):
        if email:
            user.email = email
        if username:
            user.username = username
        if password:
            user.set_password(password)
        user.save()
        return user
