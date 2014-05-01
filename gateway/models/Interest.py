"""Start minigame information."""
"""Will change based on number of questions"""
from django.db import models
from django import forms


class Interest(models.Model):

    """store Minigame Game Data for Interest game"""

    is_complete = models.BooleanField(
        "The model Completion status of the Interest game"
    )

    score = models.IntegerField(
        "The score of the Interest game"
    )

    class Meta:
        app_label = 'gateway'


class Interest_Form(forms.ModelForm):

    class Meta:
        model = Interest
        fields = '__all__'
