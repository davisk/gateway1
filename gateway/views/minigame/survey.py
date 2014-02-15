
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def survey_view(request):
    minigame = {
        "title": "Survey - Game 3",
        "subtitle": "Coming Soon!",
        "is_survey": "active"
    }

    return render(
        request,
        'minigame/survey.html',
        dict(minigame=minigame)
    )
