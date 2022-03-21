from pydoc_data.topics import topics
from django.http.response import JsonResponse
from rest_framework import serializers
from .models import News, BigBanner, Topic
import operator

class TopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ["id", "name"]

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ["title", "content", "background", "topics"]

class BigBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = BigBanner
        fields = ["title", "special", "titleIcon", "newsLink", "subtitle", "subtitleIcon"]

def getAllNews(request):
    newsItems = NewsSerializer(News.objects.all(), many = True)
    return JsonResponse(list(reversed(newsItems.data)), safe = False)

def getBigBanner(request):
    bannerItem = BigBannerSerializer(BigBanner.objects.last())
    return JsonResponse(bannerItem.data)

def getAllTopics(request):
    topicItems = TopicsSerializer(Topic.objects.order_by('name').all(), many = True)
    return JsonResponse(topicItems.data, safe=False)