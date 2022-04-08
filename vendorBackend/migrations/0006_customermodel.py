# Generated by Django 3.1.3 on 2022-04-08 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendorBackend', '0005_admin'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=50)),
                ('phone', models.CharField(max_length=10)),
                ('ven_id', models.CharField(default='', max_length=50)),
                ('description', models.TextField(default='')),
                ('sanitation', models.TextField(default='')),
                ('service', models.TextField(default='')),
            ],
        ),
    ]
