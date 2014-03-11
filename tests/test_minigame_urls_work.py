import unittest
from django.test import Client


class TestMinigameUrlsWork(unittest.TestCase):
    def setUp(self):
        # Every test needs a client.
        self.client = Client()

    def test_minigame_home(self):
        # Issue a GET request.
        response = self.client.get('/minigame')

        # Check that the response is 301 Permanent Redirect.
        self.assertEqual(response.status_code, 301)

    def test_minigame_start(self):
        # Issue a GET request.
        response = self.client.get('/minigame/start')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_minigame_aha(self):
        # Issue a GET request.
        response = self.client.get('/minigame/aha')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_minigame_elevator(self):
        # Issue a GET request.
        response = self.client.get('/minigame/elevator')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_minigame_end(self):
        # Issue a GET request.
        response = self.client.get('/minigame/end')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_minigame_gap(self):
        # Issue a GET request.
        response = self.client.get('/minigame/gap')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_minigame_interest(self):
        # Issue a GET request.
        response = self.client.get('/minigame/interest')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_minigame_survey(self):
        # Issue a GET request.
        response = self.client.get('/minigame/survey')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)
