from portfolio.commons.mixins.viewsets import ListCreateUpdateRetrieveViewSetMixin
from portfolio.testimonial.api.v1.serializers.testimonial import TestimonialSerializer
from portfolio.testimonial.models import Testimonial


class TestimonialViewSet(ListCreateUpdateRetrieveViewSetMixin):
    lookup_field = 'uuid'
    lookup_url_kwarg = 'uuid'
    serializer_class = TestimonialSerializer
    queryset = Testimonial.objects.all()
