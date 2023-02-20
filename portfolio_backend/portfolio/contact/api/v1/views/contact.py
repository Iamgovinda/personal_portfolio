from portfolio.commons.mixins.viewsets import ListCreateUpdateRetrieveViewSetMixin
from portfolio.contact.api.v1.serializers.contact import ContactSerializer
from portfolio.contact.models import Contact


class ContactViewSet(ListCreateUpdateRetrieveViewSetMixin):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
