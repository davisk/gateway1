from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def venture_view(request, id="0"):
    ventures = [
        {
            "title": "Murphee's Irish Coats",
            "progress": "30",
            "hook": "Bringing the comfort and quality of Traditional Irish\
                    coats to an Online International Exchange",
            "description": ""
        }
    ]

    return render(
        request,
        'venture.html',
        dict(
            venture=ventures[int(id)]
        )
    )
