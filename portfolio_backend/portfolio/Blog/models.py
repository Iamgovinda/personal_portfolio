from django.db import models

# Create your models here.
from portfolio.commons.models import UUIDBaseModel, FileUpload


class Blog(UUIDBaseModel):
    written_by = models.CharField(max_length=200, null=True, blank=True)
    title = models.CharField(max_length=2000, null=True, blank=True)
    content = models.TextField()
    thumbnail = models.OneToOneField(FileUpload, on_delete=models.CASCADE, null=True, blank=True)
