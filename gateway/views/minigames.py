from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def minigames_view(request):
    minigame = {
        "title": "Minigames",
        "subtitle": "Coming Soon!"
    }

    return render(
        request,
        'minigames.html',
        dict(minigame=minigame)
    )
