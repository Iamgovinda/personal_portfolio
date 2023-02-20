from django.db import models

# Create your models here.
from portfolio.commons.models import UUIDBaseModel, FileUpload
from portfolio.resume.constant import SKILL_TYPE, DESIGN


class Education(UUIDBaseModel):
    institute_name = models.CharField(max_length=100, null=True, blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField()

    def __str__(self):
        return self.institute_name


class Experience(UUIDBaseModel):
    company_name = models.CharField(max_length=100, null=True, blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField()

    def __str__(self):
        return self.company_name


class Certificate(UUIDBaseModel):
    name = models.CharField(max_length=200, null=True, blank=True)
    certificate_id = models.CharField(max_length=150, null=True, blank=True)
    certification_date = models.DateField()
    agency = models.CharField(max_length=200, null=True, blank=True)
    link = models.URLField(max_length=1000, null=True, blank=True)
    image = models.OneToOneField(FileUpload, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name


class Skill(UUIDBaseModel):
    title = models.CharField(max_length=150, null=True, blank=True)
    skill_rate = models.PositiveIntegerField()
    type = models.CharField(choices=SKILL_TYPE, default=DESIGN, max_length=100)

    def __str__(self):
        return self.title


class Resume(UUIDBaseModel):
    pass
