"""
v1 API url for swagger view
"""
from django.urls import include, path

urlpatterns = [
    # file upload url
    path('commons/', include('portfolio.commons.api.v1.urls')),
    path('user/', include('portfolio.user.api.v1.urls')),
    path('resume/', include('portfolio.resume.api.v1.urls')),
    path('testimonial/', include('portfolio.testimonial.api.v1.urls')),
    path('client/', include('portfolio.client.api.v1.urls')),
    path('contact/', include('portfolio.contact.api.v1.urls'))

]
