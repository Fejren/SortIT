from django.db import models
from django.utils.translation import gettext_lazy as _


class Material(models.Model):
    # Material to be used for trash something like tag
    name = models.CharField(max_length=150)

    class Meta:
        verbose_name = _('material')
        verbose_name_plural = _('materials')

    def __str__(self):
        return self.name


class Message(models.Model):
    # model for message from user <3
    email = models.EmailField()
    content = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.email} przesyła wiadomość'


class Trash(models.Model):
    TRASH_CONTAINER_CHOICES = [
        ('odpady zmieszane', 'Odpady zmieszane'),
        ('bio', 'BIO'),
        ('papier', 'Papier'),
        ('szkło', 'Szkło'),
        ('tworzywa sztuczne i metale', 'Tworzywa sztuczne i metale'),
    ]
    name = models.CharField(max_length=200, unique=True)
    trash_container = models.CharField(
        max_length=26,
        choices=TRASH_CONTAINER_CHOICES,
        default='mixed waste',
    )
    material = models.ManyToManyField(Material, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _('trash')
        verbose_name_plural = _('trashes')

    def __str__(self):
        return f'{self.name}'
