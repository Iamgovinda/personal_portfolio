from django.contrib import admin

# Register your models here.
from portfolio.Blog.models import Blog

admin.site.register([Blog])
