
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def minigames_view(request):
    minigame = {
        "title": "Interest - Minigame 4",
        "subtitle": "Coming Soon!"
    }

    return render(
        request,
        'minigame4.html',
        dict(minigame=minigame)
    )
