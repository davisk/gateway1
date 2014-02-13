
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def minigames_view(request):
    minigame = {
        "title": "Elevator - Minigame 5",
        "subtitle": "Coming Soon!"
    }

    return render(
        request,
        'minigame5.html',
        dict(minigame=minigame)
    )
