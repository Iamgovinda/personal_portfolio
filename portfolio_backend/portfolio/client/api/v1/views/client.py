from portfolio.client.api.v1.serializers.client import ClientSerializer
from portfolio.client.models import Client
from portfolio.commons.mixins.viewsets import ListCreateUpdateRetrieveViewSetMixin


class ClientViewSet(ListCreateUpdateRetrieveViewSetMixin):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    serializer_class = ClientSerializer
    queryset = Client.objects.all()
