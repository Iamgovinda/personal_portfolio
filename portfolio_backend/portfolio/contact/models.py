from django.db import models

# Create your models here.
from portfolio.commons.models import UUIDBaseModel


class Contact(UUIDBaseModel):
    name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=200, null=True, blank=True)
    location = models.CharField(max_length=1000, null=True, blank=True)
    budget = models.PositiveIntegerField()
    subject = models.CharField(max_length=1000, null=True, blank=True)
    message = models.TextField()

