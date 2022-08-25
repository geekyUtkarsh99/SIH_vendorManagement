from mongoengine import Document, BooleanField, EmailField, EmbeddedDocument, ListField, StringField, IntField, \
    DateField, EmbeddedDocumentField
from random import choices
from mongoengine import FloatField, Document, BooleanField, EmailField, EmbeddedDocument, ListField, StringField, \
    IntField, DateField, EmbeddedDocumentField
import mongoengine

mongoengine.connect(host="mongodb+srv://sihadmin:sihadmin@sih.2oqaj.mongodb.net/users?retryWrites=true&w=majority")


# Create your models here.
class TestModel(Document):
    val1 = StringField(max_length=28, default="")
    val2 = BooleanField(default=False)


# Vendor Model ----------------------------------------------------------------
class SessionModel(EmbeddedDocument):
    token = StringField(max_length=1000)
    validtill = DateField()


class DetailModel(EmbeddedDocument):
    name = StringField(max_length=100)
    dob = DateField()
    address = StringField(max_length=100)
    contact = StringField(max_length=10)


class VendorModel(Document):
    username = StringField(max_length=100)
    password = StringField(max_length=100)
    session = EmbeddedDocumentField(SessionModel)
    phone = StringField(max_length=10)
    email = EmailField(max_length=200)
    rating = IntField(min_value=1, max_value=5)


class DocumentModel(EmbeddedDocument):
    verId = StringField(max_length=100)
    verType = StringField(max_length=100)
    scan = StringField(max_length=100)


class SignatureModel(EmbeddedDocument):
    authority = StringField(max_length=100)
    issuedOn = DateField()
    validTill = DateField()


class NomineeDetails(EmbeddedDocument):
    name = StringField(max_length=100)
    relation = StringField(max_length=100)


class NomineeModel(EmbeddedDocument):
    nominee1 = EmbeddedDocumentField(NomineeDetails)
    nominee2 = EmbeddedDocumentField(NomineeDetails)


class Status(EmbeddedDocument):
    label = StringField(choices=["NOT VERIFIED", "VERIFIED", "REJECTED"])
    response = StringField()


class CertModel(Document):
    vendorId = StringField(max_length=100)
    vendor_profile = StringField(max_length=200)
    document = EmbeddedDocumentField(DocumentModel)
    signed = EmbeddedDocumentField(SignatureModel)
    nominees = EmbeddedDocumentField(NomineeModel)
    status = EmbeddedDocumentField(Status)
    details = EmbeddedDocumentField(DetailModel)
    request_date = DateField()


class Bussiness(EmbeddedDocument):
    name = StringField(max_length=100)
    type = StringField(max_length=100)
    open_time = StringField(max_length=100)
    close_time = StringField(max_length=100)


class LicenseModel(Document):
    vendorId = StringField(max_length=100)
    area_id = StringField(max_length=100)
    bussiness_details = EmbeddedDocumentField(Bussiness)
    valid_limit = IntField()
    signed = EmbeddedDocumentField(SignatureModel)
    status = EmbeddedDocumentField(Status)
    request_date = DateField()


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


class Area(Document):
    area_id = StringField(max_length=50)
    lat = FloatField()
    long = FloatField()
    name = StringField(max_length=50)
    radius = FloatField()
    ven_no = ListField(EmbeddedDocumentField(vendor_id))
    ven_limit = IntField()
    city = StringField(max_length=25)

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
    # Area = ArrayField(model_container=Area, model_form_class=AreaForm)
    # object = DjongoManager()


class SchemesModel(Document):
    admin_id = StringField(max_length=16)
    city = StringField(max_length=50)
    title = StringField(max_length=120)
    description = StringField(max_length=300)
    image = StringField(max_length=200)


##----------------------------------------------------------------------------


##------------------------------------------------------------------------------

# CUSTOMER MODEL ----------------------------------------------------------------##

class CustomerModel(Document):
    vendorId = StringField(max_length=50)
    description = StringField(default="")
    sanitation = FloatField(default="")
    service = FloatField(default="")
    # objects = DjongoManager()


# ..customer......................complain model..............

class CustomercomplainModel(Document):
    name = StringField(max_length=50, default="")
    phone = StringField(max_length=10)
    ven_id = StringField(max_length=50, default="")
    description = StringField(default="")
