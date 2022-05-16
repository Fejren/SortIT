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


class Trash(models.Model):
    TRASH_CONTAINER_CHOICES = [
        ('mixed waste', 'Mixed waste'),
        ('bio', 'BIO'),
        ('paper', 'Paper'),
        ('glass', 'Glass'),
        ('plastic and metals', 'Plastic and metals'),
    ]
    name = models.CharField(max_length=150)
    trash_container = models.CharField(
        max_length=18,
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
