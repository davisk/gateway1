"""survey minigame model information."""
from django.db import models


class Survey(models.Model):

    """store Minigame Game Data for survey game"""

    is_complete = models.BooleanField()

    question_one = models.CharField(
        max_length=144
    )

    question_two = models.CharField(
        max_length=144
    )

    question_three = models.CharField(
        max_length=144
    )

    question_four = models.CharField(
        max_length=144
    )

    question_five = models.CharField(
        max_length=144
    )

    question_six = models.CharField(
        max_length=144
    )

    class Meta:
        app_label = 'gateway'
