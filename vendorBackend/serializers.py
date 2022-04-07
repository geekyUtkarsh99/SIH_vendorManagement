from rest_framework import serializers
from vendorBackend.models import TestModel, VendorModel

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
