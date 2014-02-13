
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def minigames_view(request):
    minigame = {
        "title": "Aha!- Minigame 1",
        "subtitle": "Coming Soon!"
    }

    return render(
        request,
        'minigame1.html',
        dict(minigame=minigame)
    )
