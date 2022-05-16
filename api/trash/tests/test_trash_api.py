from django.urls import reverse
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from core.models import Trash, Material
from trash.serializers import TrashSerializer, MaterialSerializer

TRASH_URL = reverse('trash:trash-list')


def sample_material(name: str):
    # Create sample material
    return Material.objects.create(name=name)


class TrashAPITests(TestCase):
    # Test trash api
    def setUp(self):
        self.client = APIClient()

    def test_retrieve_trash_list(self):
        trash1 = Trash.objects.create(
            name='Piece of paper',
            trash_container='paper',
        )
        trash2 = Trash.objects.create(
            name='Carton',
            trash_container='paper',
        )
        paper = sample_material(name='paper')

        trash1.material.set([paper])
        trash2.material.set([paper])

        res = self.client.get(TRASH_URL)

        trashes = Trash.objects.all()
        serializer = TrashSerializer(trashes, many=True)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)

    def test_create_trash_successful(self):
        material = sample_material(name='Tin')
        payload = {
            'name': 'Can',
            'trash_container': 'mixed waste',
            'material': [material.id]
        }
        res = self.client.post(TRASH_URL, payload)

        exists = Trash.objects.filter(
            name=payload['name'],
        ).exists()

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertTrue(exists)

    def test_create_trash_invalid(self):
        payload = {
            'name': '',
            'trash_container': 'mixed waste',
        }
        res = self.client.post(TRASH_URL, payload)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
