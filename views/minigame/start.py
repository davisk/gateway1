from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def start_view(request):
    minigame = {
        "title": "Start",
        "subtitle": "Coming Soon!",
        "is_start": "active"
    }

    return render(
        request,
        'minigame/start.html',
        dict(minigame=minigame)
    )
