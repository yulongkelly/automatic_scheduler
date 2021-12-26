import djoser.utils
from django.test import TestCase
from django.contrib.auth.tokens import default_token_generator
from rest_framework.test import APITestCase
from rest_framework.reverse import reverse
from rest_framework import status
from djet import assertions
from django.test.utils import override_settings
from djoser.conf import settings as default_settings
from django.conf import settings



from accounts.models import UserAccount

user = {
    "email": "autoschedulertest@gmail.com",
    # "first_name": "test",
	# "last_name": "1"
}

# Create your tests here.
class UserResetPasswordTest(
    APITestCase, 
    assertions.StatusCodeAssertionsMixin, 
    assertions.InstanceAssertionsMixin,
    assertions.EmailAssertionsMixin,
):
    def setUp(self):
        self.base_url = "/auth/users/" 

    def test_post_should_send_email_to_user_with_reset_link(self):
        UserAccount.objects.create(email="autoschedulertest@gmail.com")
        response = self.client.post(self.base_url, data=user)

        self.assert_status_equal(response, status.HTTP_200_OK)
        self.assert_instance_exists(UserAccount, email=user["email"])
        self.assert_emails_in_mailbox(1)
        self.assert_instance_exists(to=[user["email"]])


    def test_post_should_not_send_email_to_user_if_user_does_not_exist(self):
        response = self.client.post(self.base_url, data=user, format='json')

        self.assert_status_equal(response, status.HTTP_200_OK)
        self.assert_emails_in_mailbox(0)

    def test_post_set_new_password(self):
        user_acc = UserAccount.objects.create(email="autoschedulertest@gmail.com")
        new_user = {
            "uid": djoser.utils.encode_uid(user_acc.pk),
            "token": default_token_generator.make_token(user_acc),
	        "new_password": "12345678wu",
        }
        response = self.client.post(self.base_url, new_user)

        self.assert_status_equal(response, status.HTTP_200_OK)
        user_acc.refresh_from_db()
        self.assertTrue(user_acc.check_password(new_user["new_password"]))
        self.assert_emails_in_mailbox(0)

