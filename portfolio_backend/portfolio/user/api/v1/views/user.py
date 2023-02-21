from portfolio.commons.mixins.viewsets import ListCreateUpdateRetrieveViewSetMixin
from portfolio.user.api.v1.serializers.user import UserInfoSerializer, UserAboutSerializer, WhatIDoSerializer
from portfolio.user.models import UserInfo, UserAbout, WhatIDo


class UserInfoViewSet(ListCreateUpdateRetrieveViewSetMixin):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer


class UserAboutViewSet(ListCreateUpdateRetrieveViewSetMixin):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    queryset = UserAbout.objects.all()
    serializer_class = UserAboutSerializer


class WhatIDoViewSet(ListCreateUpdateRetrieveViewSetMixin):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    queryset = WhatIDo.objects.all()
    serializer_class = WhatIDoSerializer
