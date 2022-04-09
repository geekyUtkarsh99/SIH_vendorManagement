from rest_framework import serializers
from vendorBackend.models import CustomerModel, TestModel, VendorModel,admin,CustomercomplainModel

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestModel
        fields = ('id',
                  'val1',
                  'val2')

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = VendorModel
        fields = ('username', 'password', 'phone', 'email')


# for admin---------------
class adminSerializer(serializers.ModelSerializer):
    class Meta:
        models = admin
        fields = ('id','username','password','city','state')

# for Customer...................

class customerSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomerModel
        fields=('name','phone','description','sanitation','service')


class customercomplainSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomercomplainModel
        fields=('name','phone','ven_id','description')