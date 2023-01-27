from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path

from portfolio.api.v1.swagger import SwaggerSchemaView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('dj-admin/', admin.site.urls),
    path('api/v1/', include('portfolio.api.v1.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    from django.views.generic import RedirectView

    urlpatterns += [
                       path('api/root/', SwaggerSchemaView.as_view()),
                       path('', RedirectView.as_view(url='/api/root/', permanent=False))
                   ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    urlpatterns += [
        re_path(r'^__debug__/', include(debug_toolbar.urls)),
    ]

