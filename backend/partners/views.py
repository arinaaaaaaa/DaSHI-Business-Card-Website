from django.http.response import JsonResponse
from rest_framework import serializers
from .models import Partner


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ["name", "address", "web", "phone", "telegram", "whatsapp"]

def getAllPartners(request):
    newsItems = PartnerSerializer(Partner.objects.all(), many = True)
    return JsonResponse(newsItems.data, safe = False)