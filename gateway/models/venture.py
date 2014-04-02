"""model venture information."""
from django.db import models
from gateway.models.Aha import Aha
from gateway.models.Elevator import Elevator
from gateway.models.Research import Research
from gateway.models.Survey import Survey
from gateway.models.Feedback import Feedback


class Venture(models.Model):

    """store venture information."""

    STEP_IN_PROGRESS_CHOICES = (
        ('1', 'Aha!!! moment'),
        ('2', 'Research'),
        ('3', 'Survey'),
        ('4', 'Feedback'),
        ('5', 'Elevator')
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

    aha = models.ForeignKey(
        "the foreign key (id) of the aha model",
        Aha,
        db_constraint=False
    )

    elevator = models.ForeignKey(
        "the foreign key (id) of the elevator model",
        Elevator,
        db_constraint=False
    )

    research = models.ForeignKey(
        "the foreign key (id) of the research model",
        Research,
        db_constraint=False
    )

    survey = models.ForeignKey(
        "the foreign key (id) of the survey model",
        Survey,
        db_constraint=False
    )

    feedback = models.ForeignKey(
        "the foreign key (id) of the feedback model",
        Feedback,
        db_constraint=False
    )

    class Meta:
        app_label = 'gateway'
