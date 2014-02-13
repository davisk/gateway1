
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def interest_view(request):
    minigame = {
        "title": "Interest - Minigame 4",
        "subtitle": "Coming Soon!"
    }

    return render(
        request,
        'interest.html',
        dict(minigame=minigame)
    )
