# Generated by Django 4.0.4 on 2022-05-15 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_trash_trash_container_delete_trashcontainer'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trash',
            old_name='updated_ad',
            new_name='updated_at',
        ),
        migrations.AlterField(
            model_name='trash',
            name='trash_container',
            field=models.CharField(choices=[('Mixed waste', (('color', 'black'),)), ('BIO', (('color', 'brown'),)), ('Paper', (('color', 'blue'),)), ('Glass', (('color', 'green'),)), ('Plastic and metals', (('color', 'yellow'),))], default=None, max_length=11, unique=True),
        ),
    ]