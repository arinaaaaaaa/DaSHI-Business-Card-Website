from django.contrib import admin
from .models import News, BigBanner, Topic

admin.site.register(Topic)
admin.site.register(News)
admin.site.register(BigBanner)