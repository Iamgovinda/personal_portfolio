from portfolio.commons.serializers import DynamicFieldsModelSerializer
from portfolio.contact.models import Contact
from portfolio.contact.utils import send_email


class ContactSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'location', 'budget', 'subject', 'message']
        
    def create(self, validated_data):
        instance = Contact.objects.create(**validated_data)
        # name = validated_data.get('name')
        # email = validated_data.get('email')
        # location = validated_data.get('location')
        # budget = validated_data.get('budget')
        send_email(validated_data, ['hamrobbms@gmail.com'])
        return instance


