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
                status={"label" : "NOT VERIFIED"},
                request_date = datetime.utcnow()
            )
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

@api_view(["POST"])
def sign_license(request):
    data = JSONParser().parse(request)
    # TODO: Check if admin exists
    lic = LicenseModel.objects.filter(
        id=data["license_id"],
        status__label="NOT VERIFIED"
    )
    if lic is None:
        return Response({"error": "Valid license not found"}, status=status.HTTP_404_NOT_FOUND)
    lic.update(
            signed__authority=data["admin_id"], 
            signed__issuedOn=datetime.now() + timedelta(days=30 * data["valid_limit"]),
            signed__validTill=datetime.now(),
            status__label="VERIFIED", 
            status__response=data["response"] if "response" in data else "")
    return Response({"message": "signature successful"})
