"""Start minigame information."""
from django.db import models


class Feedback(models.Model):

    """store Minigame Game Data for Feedback game"""
   
    is_complete = models.BooleanField()

    question_one = models.IntegerField()

    question_two = models.IntegerField()
 
    question_three = models.IntegerField()

    question_four = models.IntegerField()

    question_five = models.IntegerField()

    question_six = models.IntegerField()

    class Meta:
        app_label = 'gateway'