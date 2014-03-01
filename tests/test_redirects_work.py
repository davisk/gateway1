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

    def test_faqs(self):
        # Issue a GET request.
        response = self.client.get('/faqs')

        # Check that the response is 200 OK.
        self.assertEqual(response.status_code, 200)

    def test_community(self):
        # Issue a GET request.
        response = self.client.get('/community', follow=True)

        # Check that the response is 302 Temporary Redirect
        # And that the next points to the correct page
        self.assertEqual(
            response.redirect_chain,
            [('http://testserver/accounts/login/?next=/community', 302)]
        )

        # Check that login loads OK.
        self.assertEqual(response.status_code, 200)

    def test_profile(self):
        # Issue a GET request.
        response = self.client.get('/profile', follow=True)

        # Check that the response is 302 Temporary Redirect
        # And that the next points to the correct page
        self.assertEqual(
            response.redirect_chain,
            [('http://testserver/accounts/login/?next=/profile', 302)]
        )

        # Check that login loads OK.
        self.assertEqual(response.status_code, 200)

    def test_teacher(self):
        # Issue a GET request.
        response = self.client.get('/teacher', follow=True)

        # Check that the response is 302 Temporary Redirect
        # And that the next points to the correct page
        self.assertEqual(
            response.redirect_chain,
            [('http://testserver/accounts/login/?next=/teacher', 302)]
        )

        # Check that login loads OK.
        self.assertEqual(response.status_code, 200)

    def test_ventures(self):
        # Issue a GET request.
        response = self.client.get('/ventures', follow=True)

       # Check that the response is 302 Temporary Redirect
        # And that the next points to the correct page
        self.assertEqual(
            response.redirect_chain,
            [('http://testserver/accounts/login/?next=/ventures', 302)]
        )

        # Check that login loads OK.
        self.assertEqual(response.status_code, 200)
