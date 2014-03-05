from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def single_venture_view(request):
    ventures = [
        {
            "image": "glyphicon-book",
            "title": "Book Store",
            "description":
            "Your chain of bookstores Borders isn't doing so well."
        },
        {
            "image": "glyphicon-phone-alt",
            "title": "Call Center",
            "description":
            "Your help office has collapsed, killing all the workers. \
            But you have collected 200% with insurance fraud! \
            You're a real tycoon!"
        },
        {
            "image": "glyphicon-music",
            "title": "Music Business",
            "description":
            "Your website Napster has been shutdown by U.S. authorities. \
            Better luck next time."
        }
    ]

    currentVenture = {
        "image": "glyphicon-briefcase",
        "title": "Current Venture",
        "description": "You're doing good! Keep it up!"
    }

    return render(
        request,
        'ventures.html',
        dict(
            ventures=ventures,
            currentVenture=currentVenture
        )
    )
