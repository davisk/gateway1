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
    (r'^teacher/?$', views.teacher_view),
    (r'^minigames/aha?$', views.aha_view),
    (r'^minigames/gap?$', views.gap_view),
    (r'^minigames/survey?$', views.survey_view),
    (r'^minigames/interest?$', views.interest_view),
    (r'^minigames/elevator/?$', views.elevator_view),
    (r'^minigames/end?$', views.end_view),
)
