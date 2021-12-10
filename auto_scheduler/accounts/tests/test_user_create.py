from django.test import TestCase
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
	"first_name": "test",
	"last_name": "1",
	"password": "12345678wu",
	"re_password": "12345678wu"
}

# Create your tests here.
class UserCreateViewTest(
    APITestCase, 
    assertions.StatusCodeAssertionsMixin, 
    assertions.InstanceAssertionsMixin,
    assertions.EmailAssertionsMixin,
):
    def setUp(self):
        self.base_url = "/auth/users/" 

    def test_register(self):
        response = self.client.post(self.base_url, data=user, format='json')        
        
        self.assert_status_equal(response, status.HTTP_201_CREATED)
        self.assertTrue("password" not in response.data)
        self.assert_instance_exists(UserAccount, email=user['email'])
        user_acc = UserAccount.objects.get(email=user["email"])
        self.assertTrue(user_acc.check_password(user["password"]))
    
    def test_post_create_user_with_login_and_send_activation_email(self):
        response = self.client.post(self.base_url, user)

        self.assert_status_equal(response, status.HTTP_201_CREATED)
        self.assert_instance_exists(UserAccount, email=user["email"])
        self.assert_emails_in_mailbox(1)
        self.assert_email_exists(to=[user["email"]])

        user_acc = UserAccount.objects.get(email=user["email"])
        self.assertFalse(user_acc.is_active)
    
    def test_post_not_create_new_user_if_email_exists(self):
        UserAccount.objects.create(email="autoschedulertest@gmail.com")
        response = self.client.post(self.base_url, user)

        self.assert_status_equal(response, status.HTTP_400_BAD_REQUEST)

    def test_post_not_register_if_password_mismatch(self):
        wrong_re_password= {
            "email": "autoschedulertest@gmail.com",
            "first_name": "test",
            "last_name": "1",
            "password": "12345678wu",
            "re_password": "12345678"
        }
        response = self.client.post(self.base_url, wrong_re_password)

        self.assert_status_equal(response, status.HTTP_400_BAD_REQUEST)
        response.render()
        self.assertEqual(
            str(response.data["non_field_errors"][0]),
            default_settings.CONSTANTS.messages.PASSWORD_MISMATCH_ERROR,
        )

    