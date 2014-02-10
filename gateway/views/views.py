from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render

def community_view(request):
	myVenture = {
		"title": "My Ventures",
		"content": "Start a new venture today!"
	}
	groupVenture = {
		"title": "My Groups's Ventures",
		"content": "You do not yet have any groups. Start a venture to become part of a group."
	}
	communityVenture = {
		"title": "Community Ventures",
		"content": "John Smith just published his first survey! Gateway helped Planet Express start their own business. Read the story and see how their company is doing now. You too, could be running your own business someday!"
	}
    	return render(request, 'community.html', dict(myVenture=myVenture, groupVenture=groupVenture, communityVenture=communityVenture) )

def home_view(request):
    return render(request, 'home.html')

def members_view(request):
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
    	return render(request, 'members.html', dict(news=news, currentVenture=currentVenture) )

def minigames_view(request):
	minigame = {
		"title": "Minigames",
		"subtitle": "Coming Soon!"
	}
    	return render(request, 'minigames.html', dict(minigame=minigame) )

def profile_view(request):
    return render(request, 'profile.html')

def ventures_view(request):
    return render(request, 'ventures.html')