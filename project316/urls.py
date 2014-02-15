from django.conf.urls import patterns, include, url
from django.conf import settings
from gateway import views

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns(
    '',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('gateway.urls')),
    url(r'^accounts/', include('registration.urls')),
)
