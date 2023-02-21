from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
from portfolio.commons.models import UUIDBaseModel, FileUpload


class UserInfo(UUIDBaseModel):
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField()
    experience = models.PositiveIntegerField(null=True, blank=True)
    project_completed = models.PositiveIntegerField(null=True, blank=True)
    happy_client = models.PositiveIntegerField(null=True, blank=True)
    main_image = models.OneToOneField(FileUpload, related_name='main_img_user_info', on_delete=models.CASCADE,
                                      null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=200, null=True, blank=True)
    phone = models.CharField(max_length=14)


    def __str__(self):
        return self.name


class UserAbout(UUIDBaseModel):
    title = models.CharField(max_length=1000, null=True, blank=True)
    about = models.TextField()
    image = models.OneToOneField(FileUpload, related_name='image_user_about', on_delete=models.CASCADE, null=True,
                                 blank=True)

    def __str__(self):
        return self.title


class SocialMedia(UUIDBaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    link = models.URLField(max_length=10000)

    def __str__(self):
        return self.name


class WhatIDo(UUIDBaseModel):
    what_i_do_desc = models.TextField()


class WhatIDoItem(UUIDBaseModel):
    title = models.CharField(max_length=1000, null=True, blank=True)
    desc = models.TextField()


