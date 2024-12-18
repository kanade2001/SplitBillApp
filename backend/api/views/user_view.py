from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response

from api.models import User
from api.serializers import UserSerializer
from api.services import UserService


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  # 全てのユーザーを取得
    serializer_class = UserSerializer
    lookup_field = "username"  # usernameをlookup_fieldに指定

    def perform_create(self, serializer):
        UserService.create_user(  # create_userメソッドで新規作成
            email=serializer.validated_data["email"],
            username=serializer.validated_data["username"],
            password=serializer.validated_data["password"],
        )

    def perform_update(self, serializer):
        user = get_object_or_404(
            User, username=self.kwargs["username"]
        )  # usernameを取得
        UserService.update_user(  # update_userメソッドで更新
            user,
            email=serializer.validated_data.get("email"),
            username=serializer.validated_data.get("username"),
            password=serializer.validated_data.get("password"),
        )
        serializer.save()
