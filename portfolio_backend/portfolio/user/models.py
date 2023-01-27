from django.db import models

# Create your models here.
from portfolio.commons.models import UUIDBaseModel


class UserInfo(UUIDBaseModel):
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField()
    experience = models.PositiveIntegerField(null=True, blank=True)
    project_completed = models.PositiveIntegerField(null=True, blank=True)
    happy_client = models.PositiveIntegerField(null=True, blank=True)


