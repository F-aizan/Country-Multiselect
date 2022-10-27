from myapp.models import Country
from myapp.serializers import CountrySerializer
from rest_framework import permissions,viewsets,renderers

class Countryview(viewsets.ModelViewSet):
    
    queryset = Country.objects.all()
    serializer_class = CountrySerializer




""" class Flagview(viewsets.ModelViewSet):
    queryset = Coun_flag.ojects.all()
    serializer_class = FlagSerializer
    permission_classes = [permissions.IsAuthenticated] """




