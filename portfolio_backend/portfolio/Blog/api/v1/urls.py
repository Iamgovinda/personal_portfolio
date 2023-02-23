from rest_framework.routers import DefaultRouter

from portfolio.Blog.api.v1.views.blog import BlogViewSet

ROUTER = DefaultRouter()
ROUTER.register('', BlogViewSet, basename='blog')
urlpatterns = ROUTER.urls
