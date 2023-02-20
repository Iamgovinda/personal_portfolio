from portfolio.commons.serializers import DynamicFieldsModelSerializer
from portfolio.contact.models import Contact


class ContactSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'location', 'budget', 'subject', 'message']

