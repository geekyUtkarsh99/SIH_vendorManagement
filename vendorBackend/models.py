from django.core.validators import MaxValueValidator, MinValueValidator
from djongo import models
from django import forms


# Create your models here.
class TestModel(models.Model):
    val1 = models.CharField(max_length=28, default="")
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

# admin models ----------------------------------------------------------------##
class session(models.Model):
    token = models.CharField(max_length=50)
    valid_till = models.DateField()

    class Meta:
        abstract = True


class vendor_id(models.Model):
    id = models.CharField(max_length=50, primary_key=True)

    class Meta:
        abstract = True


class VendorForm(forms.ModelForm):
    class Meta:
        model = vendor_id
        fields = (
            'id',
        )


class Area(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    gm_loc = models.CharField(max_length=50)
    ven_no = models.ArrayField(model_container=vendor_id, model_form_class=VendorForm)

    class Meta:
        abstract = True


class AreaForm(forms.ModelForm):
    class Meta:
        model = Area
        fields = (
            'id', 'gm_loc', 'ven_no'
        )


class admin(models.Model):
    id = models.IntegerField(default=0, primary_key=True)
    username = models.CharField(default="", max_length=50)
    password = models.CharField(default="", max_length=50)
    session = models.EmbeddedField(model_container=session)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    Area = models.ArrayField(model_container=Area, model_form_class=AreaForm)
    object = models.DjongoManager()

##----------------------------------------------------------------------------


##------------------------------------------------------------------------------

# CUSTOMER MODEL ----------------------------------------------------------------##

class CustomerModel(models.Model):
    name = models.CharField(max_length=50, default="")
    phone = models.CharField(max_length=10)
    ven_id = models.CharField(max_length=50, default="")
    description = models.TextField(default="")
    sanitation = models.TextField(default="")
    service = models.TextField(default="")
    objects = models.DjongoManager()


# ..customer......................complain model..............

class CustomercomplainModel(models.Model):
    name = models.CharField(max_length=50, default="")
    phone = models.CharField(max_length=10)
    ven_id = models.CharField(max_length=50, default="")
    description = models.TextField(default="")
