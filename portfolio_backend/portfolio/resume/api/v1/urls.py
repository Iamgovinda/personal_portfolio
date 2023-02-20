from rest_framework.routers import DefaultRouter
from django.urls import path

from portfolio.resume.api.v1.views.resume import ResumeViewSet

urlpatterns = [path('', ResumeViewSet.as_view(), name='resume')]
