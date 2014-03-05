from django.conf import settings
from django.conf.urls import patterns, url, include
from django.conf.urls.static import static
from configuration.settings import *
from controllers import minigame, options
import controllers
from django.contrib import admin
from django.views.generic import RedirectView
admin.autodiscover()


minigame_patterns = patterns(
    '',
    (r'^$', RedirectView.as_view(url='/minigame/start')),
    (r'^start?$', controllers.minigame.start_view),
    (r'^aha?$', controllers.minigame.aha_view),
    (r'^gap?$', controllers.minigame.gap_view),
    (r'^survey?$', controllers.minigame.survey_view),
    (r'^interest?$', controllers.minigame.interest_view),
    (r'^elevator?$', controllers.minigame.elevator_view),
    (r'^end?$', controllers.minigame.end_view),
)

urlpatterns = patterns(
    '',
    (r'^/?$', controllers.home_view),
    (r'^admin/', include(admin.site.urls)),
    (r'^accounts/', include('registration.backends.default.urls')),
    (r'^community/?$', controllers.community_view),
    (r'^faqs/?$', controllers.faqs_view),
    (r'^profile/?$', controllers.profile_view),
    (r'^ventures/?$', controllers.ventures_view),
    (r'^ventures/(?P<id>\d{1})/$', controllers.venture_view),
    (r'^minigame/', include(minigame_patterns)),
    (r'^options/?$', controllers.options_view),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
