from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def home_view(request):
    if request.user.is_authenticated():
        news = [
            {
                "title": "Happy New Year!",
                "date": "1.1.2014"
            },
            {
                "title": "Planet Express has made their first delivery!",
                "date": "21.12.2013"
            },
            {
                "title": "Today in 1982 Bill Gates made his first dollar!",
                "date": "14.12.2013"
            }
        ]

        currentVenture = {
            "image": "glyphicon-briefcase",
            "title": "Current Venture",
            "description": "You're doing good! Keep it up!"
        }

        return render(
            request,
            'members.html',
            dict(
                news=news,
                currentVenture=currentVenture
            )
        )
    else:
        return render(request, 'home.html')
