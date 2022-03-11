from dataclasses import field
from django.http.response import JsonResponse
from rest_framework import serializers
from .models import News, BigBanner

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ["title", "content", "background"]

class BigBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BigBanner
        fields = ["title", "special", "titleIcon", "newsLink", "subtitle", "subtitleIcon"]

def getAllNews(request):
    newsItems = NewsSerializer(News.objects.all(), many = True)
    return JsonResponse(newsItems.data, safe = False)

def getBigBanner(request):
    bannerItem = BigBannerSerializer(BigBanner.objects.last())
    return JsonResponse(bannerItem.data)