from django.contrib import admin

# Register your models here.
from portfolio.client.models import Client

admin.site.register([Client])
