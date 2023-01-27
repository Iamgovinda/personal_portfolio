from rest_framework.routers import DefaultRouter

from portfolio.user.api.v1.views import UserInfoViewSet

ROUTER = DefaultRouter()
ROUTER.register('', UserInfoViewSet, basename='album')
urlpatterns = ROUTER.urls
