from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def teacher_view(request):
    profileTeacher = {
        "id": "teacher-admin-content",
        "left_title": "Profile",
        "middle_title": "Manage",
        "right_title": "Account",
        "dd1_title": "Settings",
        "dd2_title": "Help"
    }

    return render(
        request,
        'teacher.html',
        dict(
            profileTeacher=profileTeacher
        )
    )