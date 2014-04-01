from gateway.models.Aha import Aha
from gateway.models.Elevator import Elevator
from gateway.models.Feedback import Feedback
from gateway.models.Research import Research
from gateway.models.Survey import Survey

aha = Aha.objects.create(
    is_complete=False,
    question_one=0,
    question_two=0,
    question_three=0,
    question_four=0,
    question_five=0,
    question_six=0
)
elevator = Elevator.objects.create(
    is_complete=False,
    question_one=0,
    question_two=0,
    question_three=0,
    question_four=0,
    question_five=0,
    question_six=0
)
survey = Survey.objects.create(
    is_complete=False,
    question_one=0,
    question_two=0,
    question_three=0,
    question_four=0,
    question_five=0,
    question_six=0
)
feedback = Feedback.objects.create(
    is_complete=False,
    question_one=0,
    question_two=0,
    question_three=0,
    question_four=0,
    question_five=0,
    question_six=0
)
research = Research.objects.create(
    is_complete=False,
    question_one=0,
    question_two=0,
    question_three=0,
    question_four=0,
    question_five=0,
    question_six=0
)
