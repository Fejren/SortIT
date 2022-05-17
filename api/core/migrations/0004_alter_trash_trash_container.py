# Generated by Django 4.0.4 on 2022-05-15 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_rename_updated_ad_trash_updated_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trash',
            name='trash_container',
            field=models.CharField(choices=[('Mixed waste', (('color', 'black'),)), ('BIO', (('color', 'brown'),)), ('Paper', (('color', 'blue'),)), ('Glass', (('color', 'green'),)), ('Plastic and metals', (('color', 'yellow'),))], default=None, max_length=11),
        ),
    ]