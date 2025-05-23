from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

from portfolio.resume.api.v1.serializers.resume import ResumeSerializer, EducationSerializer, ExperienceSerializer, \
    CertificateSerializer, SkillSerializer
from portfolio.resume.constant import DESIGN, CODING
from portfolio.resume.models import Education, Experience, Certificate, Skill


class ResumeViewSet(APIView):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'

    # serializer_class = ResumeSerializer
    def get(self, request, *args, **kwargs):
        education_queryset = Education.objects.all().order_by('-start_date')
        experience_queryset = Experience.objects.all().order_by('-start_date')
        certificate_queryset = Certificate.objects.all()
        design_queryset = Skill.objects.all()
        # coding_queryset = Skill.objects.filter(type=CODING)

        return Response(
            {
                'education': EducationSerializer(education_queryset, many=True, context={'request': self.request}).data,
                'experience': ExperienceSerializer(experience_queryset, many=True,
                                                   context={'request': self.request}).data,
                'certificate': CertificateSerializer(certificate_queryset, many=True,
                                                     context={'request': self.request}).data,
                'skills': SkillSerializer(design_queryset, many=True).data,
                # 'coding_skills': SkillSerializer(coding_queryset, many=True).data,
            }
        )
