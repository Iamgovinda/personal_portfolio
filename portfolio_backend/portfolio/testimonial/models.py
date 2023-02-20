from django.db import models

# Create your models here.
from portfolio.commons.models import UUIDBaseModel, FileUpload


class Testimonial(UUIDBaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    company = models.CharField(max_length=100, null=True, blank=True)
    desc = models.TextField()
    image = models.OneToOneField(FileUpload, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name
