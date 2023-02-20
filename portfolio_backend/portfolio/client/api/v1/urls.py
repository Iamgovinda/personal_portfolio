from rest_framework.routers import DefaultRouter

from portfolio.client.api.v1.views.client import ClientViewSet

ROUTER = DefaultRouter()
ROUTER.register('', ClientViewSet, basename='client')
urlpatterns = ROUTER.urls
