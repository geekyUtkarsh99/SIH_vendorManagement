"""
    author : Ashwin
    Description : This Document has various views for dealing with the licenses,
                  there Creation, updation, renewal, Deletion.
"""

from datetime import datetime, timedelta
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from bson.json_util import json
from rest_framework.views import status
from vendorBackend.models import LicenseModel, VendorModel

from vendorBackend.serializers import License

@api_view(["GET"])
def create_license(request):
    data = JSONParser().parse(request)
    # TODO: do not allow same vendor to have mulitple license at the same place
    new_license = License(data=data)
    
    try:
        new_license.is_valid(raise_exception=True)
        new_license.validated_data.update(
            issued_on=datetime.utcnow(), 
            valid_till = datetime.utcnow() + timedelta(minutes=60))
        vendor: VendorModel = VendorModel.objects(
            id=new_license.validated_data["vendorId"]).first()
        if vendor is None:
            return Response({"error": "Vendor not found"}, status=status.HTTP_404_NOT_FOUND)
        new_license.save()
    except Exception as e:
        print(e)
        return Response({"error": "Invalid Data"}, status=status.HTTP_417_EXPECTATION_FAILED)

    return Response(new_license.validated_data, status=status.HTTP_201_CREATED)

@api_view(["POST"])
def get_vendor_license(request):
    data = JSONParser().parse(request)
    lic : LicenseModel = LicenseModel.objects(vendorId=data["vendorId"]).first()
    if lic is None:
        return Response({"error": "Vendor not found"}, status=status.HTTP_404_NOT_FOUND)
    print(lic.to_json())
    return Response(json.loads(lic.to_json()))

@api_view(["GET"])
def get_licenses(_):
    lic_all = LicenseModel.objects.all()
    licenses: list[LicenseModel] = []
    for l in lic_all:
        licenses.append(json.loads(l.to_json()))
    print(licenses)
    return Response(licenses)
