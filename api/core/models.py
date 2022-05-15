from django.db import models


class Material(models.Model):
    # Material to be used for trash something like tag
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name


class Trash(models.Model):
    TRASH_CONTAINER_CHOICES = [
        ('Mixed waste', (
            ('color', 'black'),
        )),
        ('BIO', (
            ('color', 'brown'),
        )),
        ('Paper', (
            ('color', 'blue'),
        )),
        ('Glass', (
            ('color', 'green'),
        )),
        ('Plastic and metals', (
            ('color', 'yellow'),
        )),
    ]
    name = models.CharField(max_length=150)
    trash_container = models.CharField(
        max_length=11,
        choices=TRASH_CONTAINER_CHOICES,
        default=None,
        unique=True
    )
    material = models.ManyToManyField(Material)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_ad = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
