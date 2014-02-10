from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render

def community_view(request):
    return render(request, 'community.html')

def home_view(request):
    return render(request, 'home.html')

def members_view(request):
	news = [
		{"title": "Happy New Year!", "date": "1.1.2014"},
		{"title": "Planet Express has made their first delivery!", "date": "21.12.2013"},
		{"title": "Today in 1982 Bill Gates made his first dollar!", "date": "14.12.2013"},
	]
	currentVenture = {"image": "glyphicon-briefcase", "title": "Current Venture", "description": "You're doing good! Keep it up!"}
	randomSampleUser = "John Smith"
	famousSampleUser = "Planet Express"
    	return render(request, 'members.html')

def minigames_view(request):
    return render(request, 'minigames.html')

def profile_view(request):
    return render(request, 'profile.html')

def ventures_view(request):
    return render(request, 'ventures.html')