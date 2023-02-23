from portfolio.Blog.api.v1.serializers.blog import BlogSerializer
from portfolio.Blog.models import Blog
from portfolio.commons.mixins.viewsets import ListCreateUpdateRetrieveViewSetMixin


class BlogViewSet(ListCreateUpdateRetrieveViewSetMixin):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
