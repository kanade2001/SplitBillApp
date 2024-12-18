from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api.views import UserViewSet

router = DefaultRouter()
router.register("", UserViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
