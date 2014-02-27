from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def profile_view(request):
    user = {
        "name": "John Smith",
        "email": "John.Smith@email.com"
    }
    return render(
        request,
        'profile_student.html',
        dict(user=user)
    )
