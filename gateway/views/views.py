from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render

def home_view(request):
    return render(request, 'home.html')

def community_view(request):
    return render(request, 'community.html')
