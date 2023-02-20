from django.contrib import admin

# Register your models here.
from portfolio.commons.models import FileUpload

admin.site.register([FileUpload])
