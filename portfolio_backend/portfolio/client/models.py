from django.db import models

# Create your models here.
from portfolio.commons.models import UUIDBaseModel, FileUpload


class Client(UUIDBaseModel):
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.OneToOneField(FileUpload, on_delete=models.CASCADE, null=True, blank=True)

