from portfolio.client.models import Client
from portfolio.commons.api.v1.serializers.file_upload import FileUploadSerializer
from portfolio.commons.serializers import DynamicFieldsModelSerializer


class ClientSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Client
        fields = ['name', 'image']

    def get_fields(self):
        fields = super(ClientSerializer, self).get_fields()
        request = self.context.get('request')
        if request and request.method.lower() in ['get']:
            fields['image'] = FileUploadSerializer()
        return fields
