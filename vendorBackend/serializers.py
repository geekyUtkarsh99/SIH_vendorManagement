from rest_framework import serializers
from vendorBackend.models import TestModel


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestModel
        fields = ('id',
                  'val1',
                  'val2')
