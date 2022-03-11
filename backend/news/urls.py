from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.getAllNews),
    path('banner/', views.getBigBanner)
]