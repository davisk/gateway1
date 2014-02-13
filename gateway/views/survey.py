
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def survey_view(request):
    minigame = {
        "title": "Survey - Game 3",
        "subtitle": "Coming Soon!"
    }

    return render(
        request,
        'survey.html',
        dict(minigame=minigame)
    )
