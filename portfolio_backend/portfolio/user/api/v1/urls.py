from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter

from portfolio.user.api.v1.views.user import UserAboutViewSet, UserInfoViewSet, WhatIDoViewSet

ROUTER = DefaultRouter()
ROUTER.register('about', UserAboutViewSet, basename='about')
ROUTER.register('what_i_do', WhatIDoViewSet, basename='about')
ROUTER.register('', UserInfoViewSet, basename='info')

urlpatterns = [path('login/', obtain_auth_token)] + ROUTER.urls
