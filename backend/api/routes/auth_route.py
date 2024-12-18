from django.urls import path

from api.views import CustomAuthToken

urlpatterns = [
    path("login/", CustomAuthToken.as_view(), name="login"),
]
