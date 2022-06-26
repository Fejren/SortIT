from django.urls import reverse
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from core.models import Message
from message.serializers import MessageSerializer
from django.contrib.auth import get_user_model

MESSAGE_LIST_URL = reverse('message:message-list')
MESSAGE_CREATE_URL = reverse('message:message-post')


def create_superuser(**params):
    return get_user_model().objects.create_superuser(**params)


class MessageCreateTests(TestCase):
    # Test message api

    def setUp(self):
        self.client = APIClient()

    def test_create_message_successful(self):
        payload = {
            'email': 'test@test.com',
            'content': 'podpaska'
        }
        res = self.client.post(MESSAGE_CREATE_URL, payload)

        exists = Message.objects.filter(
            email=payload['email']
        ).exists()

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertTrue(exists)

    def test_create_message_invalid(self):
        payload = {
            'email': '',
            'contant': 'monster high kartonik'
        }
        res = self.client.post(MESSAGE_CREATE_URL, payload)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)


class MessageListPrivateTests(TestCase):

    def setUp(self):
        self.user = create_superuser(
            email='test@test.com',
            password='test12345',
            username='Test',
        )
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_retrieve_message_list(self):
        mess1 = Message.objects.create(
            email='test@test.com',
            content='makaron',
        )
        mess2 = Message.objects.create(
            email='test@test.com',
            content='bateria',
        )
        res = self.client.get(MESSAGE_LIST_URL)

        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)


class MessageListPublicTests(TestCase):

    def setUp(self):
        self.client = APIClient()

    def test_retrieve_message_list_unsuccessful(self):
        mess1 = Message.objects.create(
            email='test@test.com',
            content='makaron',
        )
        mess2 = Message.objects.create(
            email='test@test.com',
            content='bateria',
        )
        res = self.client.get(MESSAGE_LIST_URL)

        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True)

        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
        self.assertNotEqual(res.data, serializer.data)
