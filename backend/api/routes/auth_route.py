from api.views import CustomAuthToken
from django.urls import path

urlpatterns = [
    path("login/", CustomAuthToken.as_view(), name="login"),
]
