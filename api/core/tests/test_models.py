from django.test import TestCase

from core import models


def sample_material(name: str):
    # Create sample material
    return models.Material.objects.create(name=name)


class ModelTests(TestCase):

    def test_material_str(self):
        material = models.Material.objects.create(
            name='Plastic'
        )
        self.assertEqual(str(material), material.name)

    def test_trash_str(self):
        material = sample_material(name='glass')
        trash = models.Trash.objects.create(
            name='Bootle',
            trash_container='mixed waste'
        )
        trash.material.set([material])
        self.assertEqual(str(trash), trash.name)
