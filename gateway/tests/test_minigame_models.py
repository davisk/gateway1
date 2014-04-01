from django.test import TestCase
from gateway.models.venture import Venture
from gateway.tests.sample import aha, survey, elevator, feedback, research


class AhaTestCase(TestCase):
    def setUp(self):
        self.venture = Venture(
            title="Please Work",
            image="None",
            progress=0,
            step="0",
            hook="captain",
            aha=aha,
            survey=survey,
            elevator=elevator,
            research=research,
            feedback=feedback
        )

    def test_Foreign_Key(self):
        entry = Venture.objects.get(title="Please Work")
        self.assertequal(entry.title, "Please Work")
        self.assertequal()

    def test_minigame_Aha(self):
        entry = Venture.objects.get(title="Please Work")
        self.assertequal(aha.is_complete, False)
        self.assertequal(aha.question_one, 0)
        self.assertequal(aha.question_two, 0)
        self.assertequal(aha.question_three, 0)
        self.assertequal(aha.question_four, 0)
        self.assertequal(aha.question_five, 0)
        self.sassertequal(aha.question_six, 0)
        self.assertequal(entry.aha, aha)

    def test_minigame_Elevator(self):
        entry = Venture.objects.get(title="Please Work")
        self.assertequal(elevator.question_one, 0)
        self.assertequal(elevator.question_two, 0)
        self.assertequal(elevator.question_three, 0)
        self.assertequal(elevator.question_four, 0)
        self.assertequal(elevator.question_five, 0)
        self.assertequal(elevator.question_six, 0)
        self.assertequal(entry.elevator, elevator)

    def test_minigame_Feedback(self):
        entry = Venture.objects.get(title="Please Work")
        self.assertequal(feedback.question_one, 0)
        self.assertequal(feedback.question_two, 0)
        self.assertequal(feedback.question_three, 0)
        self.assertequal(feedback.question_four, 0)
        self.assertequal(feedback.question_five, 0)
        self.assertequal(feedback.question_six, 0)
        self.assertequal(entry.feedback, feedback)

    def test_minigame_Research(self):
        entry = Venture.objects.get(title="Please Work")
        self.assertequal(research.question_one, 0)
        self.assertequal(research.question_two, 0)
        self.assertequal(research.question_three, 0)
        self.assertequal(research.question_four, 0)
        self.assertequal(research.question_five, 0)
        self.assertequal(research.question_six, 0)
        self.assertequal(entry.feedback, feedback)
