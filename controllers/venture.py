from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def venture_view(request, id="0"):
    ventures = [
        {
            "title": "Murphee's Irish Coats",
            "image": "coat",
            "progress": "90",
            "step": "elevator",
            "hook": "Bringing the comfort and quality of Traditional Irish\
                    coats to an Online International Exchange",
            "description": "test"
        },
        {
            "title": "Three Lions Magic Show",
            "image": "anti-gravity",
            "progress": "60",
            "step": "survey",
            "hook": "A crew of three globally acclaimed Magicians bend the \
                    rules of reality to make the mundane extraordinary",
            "description": "test"
        },
        {
            "title": "Melies Studio",
            "image": "film",
            "progress": "70",
            "step": "interest",
            "hook": "Georges Melies makes Black and White cinematography \
                     relevant in the 21th century",
            "description": "test"
        }
    ]

    return render(
        request,
        'venture.html',
        dict(
            venture=ventures[int(id)]
        )
    )
