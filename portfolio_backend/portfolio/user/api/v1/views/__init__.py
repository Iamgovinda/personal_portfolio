from portfolio.commons.mixins.viewsets import ListCreateUpdateRetrieveViewSetMixin
from portfolio.user.api.v1.serializers import UserInfoSerializer
from portfolio.user.models import UserInfo


class UserInfoViewSet(ListCreateUpdateRetrieveViewSetMixin):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer

