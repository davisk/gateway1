"""model venture information."""
from django.db import models


class Venture(models.Model):

    """store venture information."""

    STEP_IN_PROGRESS_CHOICES = (
        ('0', 'Aha!!! moment'),
        ('1', 'Research'),
        ('2', 'Beta'),
        ('3', 'Business Map'),
        ('4', 'Capital Structure'),
        ('5', 'Legal'),
        ('6', 'Guerilla Marketing'),
        ('7', 'Operations'),
        ('8', 'Scale'),
        ('9', 'Exit and Harvest'),
    )

    title = models.CharField(
        "venture's official title",
        max_length=30
    )

    image = models.CharField(
        "name of the jpeg image stored in static/images",
        max_length=30
    )

    progress = models.PositiveIntegerField(
        "progress as integer (out of 100)"
    )

    step = models.CharField(
        "number of current step in the Entrepreneurial process",
        max_length=1,
        choices=STEP_IN_PROGRESS_CHOICES
    )

    hook = models.CharField(
        "tweet sized hook line for the venture",
        max_length=140
    )

    class Meta:
        app_label = 'gateway'
