from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api.views import UserViewSet

router = DefaultRouter()
router.register("", UserViewSet, basename="user")

urlpatterns = [
    path("", include(router.urls)),
    path("<str:username>/",UserViewSet.as_view({'get': 'retrieve', 'patch': 'update', 'delete': 'destroy'}) ,name="user-detail"),
]
