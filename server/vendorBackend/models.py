from mongoengine import EmbeddedDocumentField, StringField, IntField, DateField
from mongoengine import document
import mongoengine
mongoengine.connect(host="mongodb+srv://sihadmin:sihadmin@sih.2oqaj.mongodb.net/users?retryWrites=true&w=majority")

from djongo import models
from django import forms


# Create your models here.
class TestModel(models.Model):
    val1 = models.CharField(max_length=28, default="")
    val2 = models.BooleanField(default=False)


# Vendor Model ----------------------------------------------------------------
class SessionModel(document.EmbeddedDocument):
    token = StringField(max_length=1000)
    validtill = DateField()

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


class VendorModel(document.Document):
    username = StringField(max_length=100)
    password = StringField(max_length=100)
    session = EmbeddedDocumentField(SessionModel)
    phone = StringField(max_length=10)
    email = StringField(max_length=200)
    _type = StringField(max_length=200)
    # document = EmbeddedDocumentField(DocumentModel)
    rating = IntField(min_value=1, max_value=5)


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


# class AreaForm(forms.ModelForm):
#     class Meta:
#         model = Area
#         fields = (
#             'id', 'gm_loc', 'ven_no'
#         )


class admin(models.Model):
    admin_id = models.CharField(default=0, max_length=16)
    username = models.CharField(default="", max_length=50)
    password = models.CharField(default="", max_length=120)
    session = models.EmbeddedField(model_container=session)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    # Area = models.ArrayField(model_container=Area, model_form_class=AreaForm)
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
