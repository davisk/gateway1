"""minigame model information."""
from django.db import models


class Elevator(models.Model):

    """store Minigame Game Data for elevator game"""

    is_complete = models.BooleanField(
        "The model Completion status of the Elevator game"
    )

    question_one = models.CharField(
        "The first answer of the Elevator game",
        max_length=144
    )

    question_two = models.CharField(
        "The first answer of the Elevator game",
        max_length=144
    )

    question_three = models.CharField(
        "The first answer of the Elevator game",
        max_length=144
    )

    question_four = models.CharField(
        "The first answer of the Elevator game",
        max_length=144
    )

    question_five = models.CharField(
        "The first answer of the Elevator game",
        max_length=144
    )

    question_six = models.CharField(
        "The first answer of the Elevator game",
        max_length=144
    )

    class Meta:
        app_label = 'gateway'
