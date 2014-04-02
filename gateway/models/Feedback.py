"""Start minigame information."""
"""Will change based on number of questions"""
from django.db import models


class Feedback(models.Model):

    """store Minigame Game Data for Feedback game"""

    is_complete = models.BooleanField(
        "The model Completion status of the Feedback game"
    )

    question_one = models.IntegerField(
        "The first question of the Feedback game"
    )

    question_two = models.IntegerField(
        "The second question of teh Feedback game"
    )

    question_three = models.IntegerField(
        "The third question of the Feedback game"
    )

    question_four = models.IntegerField(
        "The fourth question of the Feedback game"
    )

    question_five = models.IntegerField(
        "the fifth question of the Feedback game"
    )

    question_six = models.IntegerField(
        "the sixth question of the Feedback game"
    )

    class Meta:
        app_label = 'gateway'
