"""Aha minigame information."""
from django.db import models

"""model for the Aha minigame"""


class Aha(models.Model):

    is_complete = models.BooleanField()

    question_one = models.IntegerField()

    question_two = models.IntegerField()

    question_three = models.IntegerField()

    question_four = models.IntegerField()

    question_five = models.IntegerField()

    question_six = models.IntegerField()

    class Meta:
        app_label = 'gateway'
