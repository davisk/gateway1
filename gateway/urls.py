from django.conf import settings
from django.conf.urls import patterns, url, include
from django.views.generic.base import RedirectView
from gateway import views
from gateway.views import minigame
from django.contrib import admin
admin.autodiscover()


minigame_patterns = patterns(
    '',
    (r'^$', views.minigame.start_view),
    (r'^start?$', views.minigame.start_view),
    (r'^aha?$', views.minigame.aha_view),
    (r'^gap?$', views.minigame.gap_view),
    (r'^survey?$', views.minigame.survey_view),
    (r'^interest?$', views.minigame.interest_view),
    (r'^elevator?$', views.minigame.elevator_view),
    (r'^end?$', views.minigame.end_view),
)

urlpatterns = patterns(
    '',
    (r'^/?$', views.home_view),
    (r'^admin/', include(admin.site.urls)),
    (r'^accounts/', include('registration.urls')),
    (r'^community/?$', views.community_view),
    (r'^members/?$', views.members_view),
    (r'^profile/?$', views.profile_view),
    (r'^ventures/?$', views.ventures_view),
    (r'^teacher/?$', views.teacher_view),
    (r'^minigame/', include(minigame_patterns)),
)
