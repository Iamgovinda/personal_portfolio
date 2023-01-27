from portfolio.commons.serializers import DynamicFieldsModelSerializer
from portfolio.user.models import UserInfo


class UserInfoSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = UserInfo
        fields = "__all__"
