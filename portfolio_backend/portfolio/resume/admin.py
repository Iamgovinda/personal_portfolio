from django.contrib import admin

# Register your models here.
from portfolio.resume.models import Certificate, Skill, Experience, Education

admin.site.register([Education, Experience, Skill, Certificate])
