from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def elevator_view(request):
    minigame = {
        "title": "Elevator - Minigame 5",
        "subtitle": "Coming Soon!",
        "is_elevator": "active"
    }

    return render(
        request,
        'minigame/elevator.html',
        dict(minigame=minigame)
    )