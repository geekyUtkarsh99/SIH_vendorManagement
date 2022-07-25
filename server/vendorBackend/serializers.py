from rest_framework import serializers
from .models import CustomerModel, TestModel, VendorModel, admin, CustomercomplainModel
from rest_framework_mongoengine import serializers


class TestSerializer(serializers.DocumentSerializer):
    class Meta:
        model = TestModel
        fields = ('id',
                  'val1',
                  'val2')


class VendorSerializer(serializers.DocumentSerializer):
    class Meta:
        model = VendorModel
        fields = ('username', 'password', 'phone', 'email')


# for admin---------------
class adminSerializer(serializers.DocumentSerializer):
    class Meta:
        model = admin
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
