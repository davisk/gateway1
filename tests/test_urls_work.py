import unittest
from django.contrib.auth.models import User
from django.test import Client


class TestUrlsWork(unittest.TestCase):
    def setUp(self):
        # Every test needs a user
        self.user = User.objects.create_user(
            'test',
            'test@email.com',
            'test'
        )

        # Every test needs a client.
        self.client = Client()

        # User is logged in
        self.client.post(
            '/accounts/login/',
            {
                'username': 'test',
                'password': 'test'
            }
        )

    def tearDown(self):
        # Delete user after test
        self.user.delete()

    def test_home(self):
        # Issue a GET request.
        response = self.client.get('/')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_community(self):
        # Issue a GET request.
        response = self.client.get('/community')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_faqs(self):
        # Issue a GET request.
        response = self.client.get('/faqs')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_profile(self):
        # Issue a GET request.
        response = self.client.get('/profile')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_ventures(self):
        # Issue a GET request.
        response = self.client.get('/ventures')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_options(self):
        # Issue a GET request.
        response = self.client.get('/options')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)
