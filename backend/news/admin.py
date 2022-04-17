from django.contrib import admin
from solo.admin import SingletonModelAdmin
from .models import News, BigBanner, Topic

admin.site.register(Topic)
admin.site.register(News)
admin.site.register(BigBanner, SingletonModelAdmin)