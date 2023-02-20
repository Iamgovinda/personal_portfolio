from portfolio.commons.api.v1.serializers.file_upload import FileUploadSerializer
from portfolio.commons.serializers import DynamicFieldsModelSerializer
from portfolio.testimonial.models import Testimonial


class TestimonialSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['name', 'company', 'desc', 'image']

    def get_fields(self):
        request = self.context.get('request')
        fields = super(TestimonialSerializer, self).get_fields()
        if request and request.method.lower() in ['get']:
            fields['image'] = FileUploadSerializer()
        return fields


