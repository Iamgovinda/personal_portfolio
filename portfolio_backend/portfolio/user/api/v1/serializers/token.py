from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.authtoken.serializers import AuthTokenSerializer


class CustomAuthTokenSerializer(AuthTokenSerializer):
    raise_directly = False

    def validate(self, attrs):
        user = get_user_model().objects.filter(
            username__iexact=attrs['username'],
        ).first()

        if not user:
            raise serializers.ValidationError({
                'detail': 'Invalid email address'
            })

        if user and not user.is_active:
            response = {
                'detail': 'User is not active',
                'code': 'UNAUTHED'
            }
            raise serializers.ValidationError(response)

        data = super().validate(attrs)
        return data

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass
