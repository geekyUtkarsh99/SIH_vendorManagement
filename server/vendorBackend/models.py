from mongoengine import *
from mongoengine import document
import mongoengine
mongoengine.connect(host="mongodb+srv://sihadmin:sihadmin@sih.2oqaj.mongodb.net/users?retryWrites=true&w=majority")

from django import forms


# Create your models here.
class TestModel(Document):
    val1 = StringField(max_length=28, default="")
    val2 = BooleanField(default=False)


# Vendor Model ----------------------------------------------------------------
class SessionModel(document.EmbeddedDocument):
    token = StringField(max_length=1000)
    validtill = DateField()

class Pop(Document):
    link = StringField(max_length=400)

    class Meta:
        abstract = True


class DocumentModel(Document):
    _type = StringField(max_length=200)
    _id = StringField(max_length=100)
    pop = ListField(model_container=Pop)

    class Meta:
        abstract = True


class CertificateModel(Document):
    issuedOn = DateField()
    validtill = DateField()
    valid = BooleanField()

    class Meta:
        abstract = True


class LicenseModel(Document):
    issuedOn = DateField()
    validtill = DateField()
    valid = BooleanField()
    areaId = StringField(max_length=100)

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
class session(EmbeddedDocument):
    token = StringField(max_length=50)
    valid_till = DateField()

    class Meta:
        abstract = True


class vendor_id(EmbeddedDocument):
    ven_id = StringField(max_length=50)

    class Meta:
        abstract = True


# class VendorForm(EmbeddedDocument):
#     class Meta:
#         model = vendor_id
#         fields = (
#             'id',
#         )


class Area(EmbeddedDocument):
    area_id = StringField(max_length=50)
    gm_loc = StringField(max_length=50)
    ven_no = ListField(EmbeddedDocumentField(vendor_id))
    ven_limit = IntField()
    class Meta:
        abstract = True


# class AreaForm(forms.ModelForm):
#     class Meta:
#         model = Area
#         fields = (
#             'id', 'gm_loc', 'ven_no'
#         )


class admin(Document):
    admin_id = StringField(default="", max_length=16)
    username = StringField(default="", max_length=50)
    password = StringField(default="", max_length=120)
    session = EmbeddedDocumentField(session)
    city = StringField(max_length=50)
    state = StringField(max_length=50)
    Area = ListField(EmbeddedDocumentField(Area))
    # Area = ArrayField(model_container=Area, model_form_class=AreaForm)
    # object = DjongoManager()

##----------------------------------------------------------------------------


##------------------------------------------------------------------------------

# CUSTOMER MODEL ----------------------------------------------------------------##

class CustomerModel(Document):
    name = StringField(max_length=50, default="")
    phone = StringField(max_length=10)
    ven_id = StringField(max_length=50, default="")
    description = StringField(default="")
    sanitation = StringField(default="")
    service = StringField(default="")
    # objects = DjongoManager()


# ..customer......................complain model..............

class CustomercomplainModel(Document):
    name = StringField(max_length=50, default="")
    phone = StringField(max_length=10)
    ven_id = StringField(max_length=50, default="")
    description = StringField(default="")
