from django.conf import settings
from django.contrib.auth.tokens import default_token_generator
from django.test.utils import override_settings
from djet import assertions
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase

import djoser.signals
import djoser.utils
import djoser.views
from djoser.conf import settings as default_settings

from accounts.models import UserAccount

class ActivationViewTest(
    APITestCase, assertions.EmailAssertionsMixin, assertions.StatusCodeAssertionsMixin
):
    def setUp(self):
        self.base_url = "/auth/users/activation/"
        self.signal_sent = False

    def signal_receiver(self, *args, **kwargs):
        self.signal_sent = True

    def test_post_activate_user_and_not_login(self):
        user = UserAccount.objects.create(email="123test@gmail.com")
        user.is_active = False
        user.save()
        data = {
            "uid": djoser.utils.encode_uid(user.pk),
            "token": default_token_generator.make_token(user),
        }

        response = self.client.post(self.base_url, data)
        user.refresh_from_db()

        self.assert_status_equal(response, status.HTTP_204_NO_CONTENT)
        self.assertTrue(user.is_active)

    
    def test_post_respond_with_bad_request_when_wrong_uid(self):
        user = UserAccount.objects.create(email="123test@gmail.com")
        data = {"uid": "wrong-uid", "token": default_token_generator.make_token(user)}

        response = self.client.post(self.base_url, data)

        self.assert_status_equal(response, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(list(response.data.keys()), ["uid"])
        self.assertEqual(
            response.data["uid"],
            [default_settings.CONSTANTS.messages.INVALID_UID_ERROR],
        )

    def test_post_sent_confirmation_email(self):
        user = UserAccount.objects.create(email="123test@gmail.com")
        user.is_active = False
        user.save()
        djoser.signals.user_activated.connect(self.signal_receiver)
        data = {
            "uid": djoser.utils.encode_uid(user.pk),
            "token": default_token_generator.make_token(user),
        }

        response = self.client.post(self.base_url, data)

        self.assert_status_equal(response, status.HTTP_204_NO_CONTENT)
        self.assert_emails_in_mailbox(1)
        self.assert_email_exists(to=[user.email])
        self.assertTrue(self.signal_sent)