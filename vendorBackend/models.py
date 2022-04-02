from django.db import models


# Create your models here.
class TestModel(models.Model):
    val1 = models.CharField(max_length=28,default="")
    val2 = models.BooleanField(default=False)
