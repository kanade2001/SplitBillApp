from rest_framework import viewsets

from api.models import User
from api.serializers import UserSerializer
from api.services import UserService

from django.shortcuts import get_object_or_404
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "username"

    def perform_create(self, serializer):
        UserService.create_user(
            email=serializer.validated_data["email"],
            username=serializer.validated_data["username"],
            password=serializer.validated_data["password"],
        )

    def perform_update(self, serializer):
        user = get_object_or_404(User, username=self.kwargs["username"])
        UserService.update_user(
            user,
            email=serializer.validated_data.get("email"),
            username=serializer.validated_data.get("username"),
            password=serializer.validated_data.get("password"),
        )
        serializer.save()
    