from portfolio.Blog.models import Blog
from portfolio.commons.serializers import DynamicFieldsModelSerializer


class BlogSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Blog
        fields = ['written_by', 'title', 'content']
