from django.http.response import JsonResponse
from rest_framework import serializers
from .models import News


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ["title", "content", "background"]

def getAllNews(request):
    newsItems = NewsSerializer(News.objects.all(), many = True)
    return JsonResponse(newsItems.data, safe = False)
