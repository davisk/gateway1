from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def teacher_view(request):
    subnav = [
        {
            "id": "tabi-profile",
            "title": "Profile",
            "icon": "glyphicon-user",
            "content": "test profile",
            "active": "active"
        },
        {
            "id": "tabi-manage",
            "title": "Manage",
            "icon": "glyphicon-tasks",
            "content": "test manage"
        },
        {
            "id": "tabi-account",
            "title": "Account",
            "icon": "glyphicon-cloud",
            "content": "test account"
        },
        {
            "id": "tabi-settings",
            "title": "Settings",
            "icon": "glyphicon-cog",
            "content": "test settings"
        },
        {
            "id": "tabi-help",
            "title": "Help",
            "icon": "glyphicon-question-sign",
            "content": "test help"
        }
    ]

    return render(
        request,
        'teacher.html',
        dict(
            subnav=subnav
        )
    )
