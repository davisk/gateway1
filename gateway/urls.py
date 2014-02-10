from django.conf import settings
from django.conf.urls import patterns, url, include
from gateway import views

urlpatterns = patterns(
    '',
    (r'^/?$', views.home_view),
    (r'^community/?$', views.community_view),
)