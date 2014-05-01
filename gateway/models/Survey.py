"""survey minigame model information."""
"""Will change based on number of questions"""
from django.db import models
from django import forms


class Survey(models.Model):

    """store Minigame Game Data for survey game"""

    is_complete = models.BooleanField(
        "The model Completion status of the Survey game"
    )

    question_one = models.IntegerField(
        "The first question of the Survey game"
    )

    question_two = models.IntegerField(
        "The second question of the Survey game"
    )

    question_three = models.IntegerField(
        "The third question of the Survey game"
    )

    question_four = models.IntegerField(
        "The fourth question of the Survey game"
    )

    question_five = models.IntegerField(
        "the fifth question of the Survey game"
    )

    class Meta:
        app_label = 'gateway'


class Survey_Form(forms.ModelForm):

    class Meta:
        model = Survey
        fields = '__all__'
