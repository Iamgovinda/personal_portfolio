from rest_framework import serializers

from portfolio.commons.models import FileUpload
from portfolio.commons.serializers import DynamicFieldsModelSerializer


class FileUploadSerializer(DynamicFieldsModelSerializer):

    class Meta:
        model = FileUpload
        read_only_fields = ['uuid', 'file_name']
        fields = ['uuid', 'file', 'file_name']

    def get_fields(self):
        fields = super().get_fields()
        if self.request and self.request.method.lower() == 'get':
            fields['file'] = serializers.URLField(source='file_thumb')
        return fields
