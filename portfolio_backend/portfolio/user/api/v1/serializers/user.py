from django.contrib.auth.models import User
from rest_framework import serializers

from portfolio.commons.api.v1.serializers.file_upload import FileUploadSerializer
from portfolio.commons.serializers import DynamicFieldsModelSerializer
from portfolio.user.models import UserInfo, UserAbout, SocialMedia, WhatIDoItem, WhatIDo


class UserInfoSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = UserInfo
        fields = ['name', 'description', 'experience', 'project_completed', 'happy_client', 'main_image', 'address',
                  'email', 'phone']

    def get_fields(self):
        fields = super(UserInfoSerializer, self).get_fields()
        request = self.context.get('request')
        if request and request.method.lower() in ['get']:
            fields['main_image'] = FileUploadSerializer()
        return fields


class SocialMediaSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = SocialMedia
        fields = ['name', 'link']


class UserAboutSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = UserAbout
        fields = ['title', 'about', 'image']

    def get_fields(self):
        fields = super(UserAboutSerializer, self).get_fields()
        request = self.context.get('request')
        if request and request.method.lower() == 'get':
            fields['social_links'] = serializers.SerializerMethodField()
            fields['image'] = FileUploadSerializer()
        return fields

    def get_social_links(self, obj):
        social_media_queryset = SocialMedia.objects.all()
        datas = SocialMediaSerializer(social_media_queryset, many=True).data
        return {f'{data["name"]}': f'{data["link"]}' for data in datas}


class WhatIDoItemSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = WhatIDoItem
        fields = ['title', 'desc']


class WhatIDoSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = WhatIDo
        fields = ['what_i_do_desc']

    def get_fields(self):
        fields = super(WhatIDoSerializer, self).get_fields()
        request = self.context.get('request')
        if request and request.method.lower() in ['get']:
            fields['what_i_do_items'] = serializers.SerializerMethodField()
        return fields

    def get_what_i_do_items(self, obj):
        what_i_do_queryset = WhatIDoItem.objects.all()
        return WhatIDoItemSerializer(what_i_do_queryset, many=True).data


class UserSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'is_active', 'groups')
