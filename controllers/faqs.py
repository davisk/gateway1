from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def faqs_view(request):
    return render(
        request,
        'faqs.html',
        #dict(faq=faq)
    )
