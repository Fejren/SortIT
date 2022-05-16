from django.urls import reverse
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from core.models import Material
from trash.serializers import MaterialSerializer

MATERIAL_URL = reverse('trash:material-list')


def sample_material(name: str):
    # Create sample material
    return Material.objects.create(name=name)


class MaterialAPITests(TestCase):
    # Test trash api
    def setUp(self):
        self.client = APIClient()

    def test_retrieve_material_list(self):
        material1 = Material.objects.create(
            name='Cotton'
        )
        material2 = Material.objects.create(
            name='Cotton'
        )
        res = self.client.get(MATERIAL_URL)
        materials = Material.objects.all()
        serializer = MaterialSerializer(materials, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)

    def test_create_material_successful(self):
        payload = {
            'name': 'Cotton'
        }

        res = self.client.post(MATERIAL_URL, payload)

        exists = Material.objects.filter(name='Cotton').exists()

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        self.assertTrue(exists)

    def test_create_material_invalid(self):
        payload = {
            'name': '',
        }
        res = self.client.post(MATERIAL_URL, payload)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
