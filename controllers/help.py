from django.shortcuts import render


def help_view(request):
    """load option help view"""
    return render(request, 'help.html')
