
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def minigames_view(request):
    minigame = {
        "title": "Survey - Game 3",
        "subtitle": "Coming Soon!"
    }

    return render(
        request,
        'minigame3.html',
        dict(minigame=minigame)
    )
