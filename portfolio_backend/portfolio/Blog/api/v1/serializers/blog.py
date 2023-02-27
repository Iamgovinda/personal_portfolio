from rest_framework import serializers

from portfolio.Blog.models import Blog
from portfolio.commons.api.v1.serializers.file_upload import FileUploadSerializer
from portfolio.commons.models import FileUpload
from portfolio.commons.serializers import DynamicFieldsModelSerializer


class BlogSerializer(DynamicFieldsModelSerializer):
    content = serializers.CharField(allow_blank=True, allow_null=True)

    class Meta:
        model = Blog
        fields = ['uuid', 'written_by', 'title', 'content', 'thumbnail']

    def get_fields(self):
        fields = super(BlogSerializer, self).get_fields()
        request = self.context.get('request')
        if request and request.method.lower() in ['get']:
            fields['thumbnail'] = FileUploadSerializer()
            fields['publish_date'] = serializers.SerializerMethodField()
        if request and request.method.lower() in ['post']:
            fields['thumbnail'] = serializers.SlugRelatedField(slug_field='uuid', queryset=FileUpload.objects.all())
        return fields

    def get_publish_date(self, obj):
        return obj.created_at.date()
