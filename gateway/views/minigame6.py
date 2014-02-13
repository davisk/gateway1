
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def minigames_view(request):
    minigame = {
        "title": "End - The Final Minigame",
        "subtitle": "Coming Soon!"
    }

    return render(
        request,
        'minigame6.html',
        dict(minigame=minigame)
    )
