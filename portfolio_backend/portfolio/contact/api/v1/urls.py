from rest_framework.routers import DefaultRouter

from portfolio.contact.api.v1.views.contact import ContactViewSet

ROUTER = DefaultRouter()
ROUTER.register('', ContactViewSet, basename='client')
urlpatterns = ROUTER.urls
