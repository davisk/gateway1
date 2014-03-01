import unittest
from django.test import Client


class TestRedirectssWork(unittest.TestCase):
    def setUp(self):
        # Every test needs a client.
        self.client = Client()

    def test_home(self):
        # Issue a GET request.
        response = self.client.get('/')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_community(self):
        # Issue a GET request.
        response = self.client.get('/community')

        # Check that the response is 302 Temporary Redirect.
        self.assertEqual(response.status_code, 302)

    def test_faqs(self):
        # Issue a GET request.
        response = self.client.get('/faqs')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_profile(self):
        # Issue a GET request.
        response = self.client.get('/profile')

        # Check that the response is 302 Temporary Redirect.
        self.assertEqual(response.status_code, 302)

    def test_teacher(self):
        # Issue a GET request.
        response = self.client.get('/teacher')

        # Check that the response is 302 Temporary Redirect.
        self.assertEqual(response.status_code, 302)

    def test_ventures(self):
        # Issue a GET request.
        response = self.client.get('/ventures')

        # Check that the response is 302 Temporary Redirect.
        self.assertEqual(response.status_code, 302)
