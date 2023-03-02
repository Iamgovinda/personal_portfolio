from django.contrib.auth.models import User
from knox.auth import TokenAuthentication
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny

from portfolio.commons.mixins.viewsets import ListCreateUpdateRetrieveViewSetMixin, ListRetrieveViewSetMixin
from portfolio.user.api.v1.serializers.user import UserInfoSerializer, UserAboutSerializer, WhatIDoSerializer, \
    UserSerializer
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


class UserViewSet(ListRetrieveViewSetMixin):
    lookup_field = 'username'
    lookup_url_kwarg = 'username'
    serializer_class = UserSerializer
    queryset = User.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # print("Auth Token", self.request.headers['Authorization'])
        if self.kwargs['username'] == 'me':
            self.kwargs['username'] = self.request.user.username
        return super().get_object()
