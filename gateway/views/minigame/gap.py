from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def gap_view(request):
    minigame = {
        "title": "Gap - Minigame 2",
        "subtitle": "Coming Soon!",
        "is_gap": "active"
    }

    return render(
        request,
        'minigame/gap.html',
        dict(minigame=minigame)
    )
