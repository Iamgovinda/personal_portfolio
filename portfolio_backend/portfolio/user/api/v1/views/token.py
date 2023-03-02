from django.contrib.auth import login
from django.utils import timezone
from knox.auth import TokenAuthentication
from knox.models import AuthToken
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.settings import api_settings

from ..serializers.token import CustomAuthTokenSerializer


class ObtainAuthTokenView(ObtainAuthToken):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES
    authentication_classes = [TokenAuthentication]

    def post(self, request, *args, **kwargs):
        serializer = CustomAuthTokenSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        # Adding user_agent and app specific information in AuthToken Model
        instance, token = AuthToken.objects.create(user=user)

        user.last_login = timezone.now()
        user.save(update_fields=['last_login'])

        if user.is_superuser:
            grp = 'Admin'
        else:
            grp = None
        login(request, user)
        return Response(
            {
                'token': token,
                'available_tokens': AuthToken.objects.filter(user=user).count(),
                'group': grp,
                'username': user.username
            }
        )
