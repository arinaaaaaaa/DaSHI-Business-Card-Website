from django.urls import include, path
from django.conf.urls.static import static
from django.contrib import admin
from . import settings
from news import urls as newsURL
from partners import urls as partnersURL

urlpatterns = [
    path('ds-api/admin/', admin.site.urls),
    path('ds-api/news/', include(newsURL)),
    path('ds-api/partners/', include(partnersURL))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
