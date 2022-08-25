from rest_framework import serializers
from .models import CertModel, CustomerModel, LicenseModel, SchemesModel, Status, TestModel, VendorModel, admin,CustomercomplainModel , Area
from rest_framework_mongoengine import serializers


class TestSerializer(serializers.DocumentSerializer):
    class Meta:
        model = TestModel
        fields = ('id',
                  'val1',
                  'val2')

class AreaSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Area

class SchemeSerializer(serializers.DocumentSerializer):
    class Meta:
        model = SchemesModel


class VendorSerializer(serializers.DocumentSerializer):
    class Meta:
        model = VendorModel
        fields = ('username', 'password', 'phone', 'email')


class Certificate(serializers.DocumentSerializer):
    class Meta:
        model = CertModel

    def get_id(self):
        instance = super(Certificate, self).save()
        return instance.id

    def init_status(self):
        instance = super(Certificate, self).save()
        instance.status = Status(status="NOT VERIFIED")


class License(serializers.DocumentSerializer):
    class Meta:
        model = LicenseModel

    def get_id(self):
        instance = super(License, self).save()
        return instance.id


# for admin---------------
class adminSerializer(serializers.DocumentSerializer):
    class Meta:
        model = admin
        depth = 2
        # fields = ('admin_id', 'username', 'password','city','state')


# for Customer...................

class customerSerializer(serializers.DocumentSerializer):
    class Meta:
        model = CustomerModel
        fields = ('name', 'phone', 'description', 'sanitation', 'service')


class customercomplainSerializer(serializers.DocumentSerializer):
    class Meta:
        model = CustomercomplainModel
        fields = ('name', 'phone', 'ven_id', 'description')
