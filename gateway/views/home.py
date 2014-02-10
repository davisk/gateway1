lfrom django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def home_view(request):
    return render(request, 'home.html')
