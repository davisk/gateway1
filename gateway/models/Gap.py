"""Gap Minigame Information."""
"""Will change based on number of questions"""
from django.db import models
from django import forms


class Gap(models.Model):

    """store Minigame Game Data for elevator game"""

    is_complete = models.BooleanField()

    is_complete = models.BooleanField(
        "The model Completion status of the Gap game"
    )

    question_one = models.IntegerField(
        "The first question of the Gap game"
    )

    question_two = models.IntegerField(
        "The second question of the Gap game"
    )

    question_three = models.IntegerField(
        "The third question of the Gap game"
    )

    question_four = models.IntegerField(
        "The fourth question of the Gap game"
    )

    question_five = models.IntegerField(
        "the fifth question of the Gap game"
    )

    class Meta:
        app_label = 'gateway'


class Gap_Form(forms.ModelForm):

    class Meta:
        model = Gap
        fields = '__all__'
