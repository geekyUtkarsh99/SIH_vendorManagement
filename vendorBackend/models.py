from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from djongo import models


# Create your models here.
class TestModel(models.Model):
    val1 = models.CharField(max_length=28,default="")
    val2 = models.BooleanField(default=False)

# Vendor Model ----------------------------------------------------------------

class SessionModel(models.Model):
    token = models.CharField(max_length=200)
    validtill = models.DateField()

    class Meta:
        abstract = True

class Pop(models.Model):
    link = models.CharField(max_length=400)

    class Meta:
        abstract = True

class DocumentModel(models.Model):
    _type = models.CharField(max_length=200)
    _id = models.CharField(max_length=100)
    pop = models.ArrayField(model_container=Pop)

    class Meta:
        abstract = True

class CertificateModel(models.Model):
    issuedOn = models.DateField()
    validtill = models.DateField()
    valid = models.BooleanField()

    class Meta:
        abstract = True

class LicenseModel(models.Model):
    issuedOn = models.DateField()
    validtill = models.DateField()
    valid = models.BooleanField()
    areaId = models.CharField(max_length=100)

    class Meta:
        abstract = True

class VendorModel(models.Model):
    username = models.CharField(max_length=100, default="")
    password = models.CharField(max_length=200)
    session = models.EmbeddedField(model_container=SessionModel)
    phone = models.CharField(max_length=10)
    email = models.CharField(max_length=200)
    _type = models.CharField(max_length=200)
    document = models.EmbeddedField(model_container=DocumentModel)
    certificate = models.EmbeddedField(model_container=CertificateModel)
    license = models.EmbeddedField(model_container=LicenseModel)
    rating = models.IntegerField(validators=[MaxValueValidator(5), MinValueValidator(1)], default=4)
    objects = models.DjongoManager()

##------------------------------------------------------------------------------

