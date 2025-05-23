from knox.auth import TokenAuthentication
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter

from portfolio.Blog.api.v1.serializers.blog import BlogSerializer
from portfolio.Blog.models import Blog


class BlogViewSet(ModelViewSet):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    serializer_class = BlogSerializer
    authentication_classes = [TokenAuthentication]
    filter_backends = [SearchFilter]
    search_fields = ['written_by', 'title']

    def get_queryset(self):
        if self.request.user.is_authenticated and self.request.user.is_superuser:
            return Blog.objects.all()
        return Blog.objects.all().exclude(content=None)
