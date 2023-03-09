from rest_framework import serializers

from portfolio.commons.api.v1.serializers.file_upload import FileUploadSerializer
from portfolio.commons.serializers import DynamicFieldsModelSerializer
from portfolio.resume.constant import DESIGN, CODING
from portfolio.resume.models import Education, Experience, Certificate, Skill, Resume


class EducationSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Education
        fields = ['title', 'institute_name', 'start_date', 'end_date', 'description']

    def get_fields(self):
        fields = super(EducationSerializer, self).get_fields()
        if self.context.get('request').method.lower() in ['get']:
            fields['period'] = serializers.SerializerMethodField()
        return fields

    @staticmethod
    def get_period(obj):
        if obj.still_studying:
            return f'{obj.start_date.year} - Now'
        return f'{obj.start_date.year} - {obj.end_date.year}'


class ExperienceSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Experience
        fields = ['title', 'company_name', 'start_date', 'end_date', 'description']

    def get_fields(self):
        fields = super(ExperienceSerializer, self).get_fields()
        if self.context.get('request').method.lower() in ['get']:
            fields['period'] = serializers.SerializerMethodField()
        return fields

    @staticmethod
    def get_period(obj):
        if obj.still_working:
            return f'{obj.start_date.year} - Now'
        return f'{obj.start_date.year} - {obj.end_date.year}'


class CertificateSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Certificate
        fields = ['name', 'certificate_id', 'certification_date', 'agency', 'link', 'image']

    def get_fields(self):
        fields = super(CertificateSerializer, self).get_fields()
        request = self.context.get('request')
        if request and request.method.lower() in ['get']:
            fields['image'] = FileUploadSerializer()
        return fields


class SkillSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Skill
        fields = ['title', 'skill_rate']


class ResumeSerializer(serializers.Serializer):
    pass
    # class Meta:
    #     model = Education
    #     fields = ['institute_name', 'start_date', 'end_date', 'description']
    #
    # def get_fields(self):
    #     fields = super(ResumeSerializer, self).get_fields()
    #     request = self.context.get('request')
    #     if request and request.method.lower() in ['get']:
    #         # fields['education'] = serializers.SerializerMethodField()
    #         fields['experience'] = serializers.SerializerMethodField()
    #         fields['certificates'] = serializers.SerializerMethodField()
    #         fields['design_skills'] = serializers.SerializerMethodField()
    #         fields['coding_skills'] = serializers.SerializerMethodField()
    #     return fields
    #
    # def get_education(self, obj):
    #     education_queryset = Education.objects.all()
    #     return EducationSerializer(Education, many=True).data
    #
    # def get_experience(self, obj):
    #     experience_queryset = Experience.objects.all()
    #     return ExperienceSerializer(experience_queryset, many=True).data
    #
    # def get_certificates(self, obj):
    #     certificate_queryset = Certificate.objects.all()
    #     return CertificateSerializer(certificate_queryset, many=True).data
    #
    # def get_design_skills(self, obj):
    #     design_queryset = Skill.objects.filter(type=DESIGN)
    #     return SkillSerializer(design_queryset, many=True).data
    #
    # def get_coding_skills(self, obj):
    #     coding_queryset = Skill.objects.filter(type=CODING)
    #     return SkillSerializer(coding_queryset, many=True).data
