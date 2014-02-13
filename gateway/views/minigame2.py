
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def minigames_view(request):
    minigame = {
        "title": "Gap - Minigame 2",
        "subtitle": "Coming Soon!"
    }

    return render(
        request,
        'minigame2.html',
        dict(minigame=minigame)
    )
