"""
survey minigame.

this minigame shows user how to survey potential customers
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render
from gateway.models.Survey import survey, Survey_Form
from gateway.models.venture import Venture
from django.db import transaction


def elevator_view(request):
    """render aha minigame."""
    form = Survey_Form
    minigame = {
        "title": "Aha!- Minigame 1",
        "subtitle": "Coming Soon!",
        "is_aha": "active"
    }

    return render(
        request,
        'minigame/elevator.html',
        dict(minigame=minigame)
    )
    """contains temp data for venture currently"""
    with transaction.atomic():
        venture = Venture(
            title="Murphee's Irish Coats",
            image="coat",
            progress=90,
            step="1",
            hook="Bringing the comfort and quality of Traditional Irish coats\
             to an Online International Exchange"
        )
        if request.method == 'POST':
            form = Survey_Form(request.POST)
            if form.is_valid():
                elevator = form.save()
                venture.aha = elevator
                venture.save()
