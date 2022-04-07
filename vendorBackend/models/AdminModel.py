from django.db import models


class admin(models.Model):
    id = models.IntegerField(default=0, max_length=12)
    username = models.CharField(default="", max_length=50)
    password = models.CharField(default="", max_length=50)


class session(models.Model):
    token = models.CharField(max_length=50)
    valid_till = models.DateField()


class Area(models.Model):
    id = models.CharField(max_length=50)
    gm_loc = models.CharField(max_length=50)
