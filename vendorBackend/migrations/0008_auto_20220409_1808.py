# Generated by Django 3.1.3 on 2022-04-09 12:38

from django.db import migrations
import djongo.models.fields
import vendorBackend.models


class Migration(migrations.Migration):

    dependencies = [
        ('vendorBackend', '0007_customercomplainmodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='admin',
            name='Area',
            field=djongo.models.fields.ArrayField(model_container=vendorBackend.models.Area, model_form_class=vendorBackend.models.AreaForm),
        ),
    ]
