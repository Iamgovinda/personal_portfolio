from rest_framework.routers import DefaultRouter

from portfolio.testimonial.api.v1.views.testimonial import TestimonialViewSet

ROUTER = DefaultRouter()
ROUTER.register('', TestimonialViewSet, basename='testimonial')
urlpatterns = ROUTER.urls
