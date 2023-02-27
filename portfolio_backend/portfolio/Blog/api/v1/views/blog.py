from rest_framework.viewsets import ModelViewSet

from portfolio.Blog.api.v1.serializers.blog import BlogSerializer
from portfolio.Blog.models import Blog


class BlogViewSet(ModelViewSet):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
