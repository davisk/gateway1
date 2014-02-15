from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def aha_view(request):
    minigame = {
        "title": "Aha!- Minigame 1",
        "subtitle": "Coming Soon!",
        "is_aha": "active"
    }

    return render(
        request,
        'minigame/aha.html',
        dict(minigame=minigame)
    )
