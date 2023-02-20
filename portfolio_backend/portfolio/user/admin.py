from django.contrib import admin

# Register your models here.
from portfolio.user.models import SocialMedia, UserAbout, UserInfo, WhatIDoItem, WhatIDo

admin.site.register([UserInfo, UserAbout, SocialMedia, WhatIDo, WhatIDoItem])
