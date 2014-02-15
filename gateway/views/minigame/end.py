
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def end_view(request):
    minigame = {
        "title": "End - The Final Minigame",
        "subtitle": "Coming Soon!",
        "is_end": "active"
    }

    return render(
        request,
        'minigame/end.html',
        dict(minigame=minigame)
    )
