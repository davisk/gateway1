from django.conf import settings
from django.conf.urls import patterns, url, include
from gateway import views

urlpatterns = patterns(
    '',
    (r'^/?$', views.home_view),
    (r'^community/?$', views.community_view),
    (r'^members/?$', views.members_view),
    (r'^minigames/?$', views.minigames_view),
    (r'^profile/?$', views.profile_view),
    (r'^ventures/?$', views.ventures_view),
)