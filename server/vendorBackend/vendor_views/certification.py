"""
    author:      Ashwin
    description: This field contains views related to transactions on certification
                 i.e creation, updation and renewal
"""

from datetime import datetime
from bson.json_util import json
from pymongo.command_cursor import CommandCursor
from rest_framework.exceptions import status
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from vendorBackend.models import CertModel, Status, VendorModel

from vendorBackend.serializers import Certificate

@api_view(["GET"])
def create_certification(request):
    data = JSONParser().parse(request)
    cert = CertModel.objects.filter(
            vendorId=data["vendorId"],
            status__label="NOT VERIFIED"
        )
    if cert.count() > 0:
        return Response({"error": "Vendor certificate already exists"}, status=status.HTTP_412_PRECONDITION_FAILED)
    new_cert = Certificate(data=data)
    try:
        new_cert.is_valid(raise_exception=True)
        new_cert.validated_data.update(status = {"label": "NOT VERIFIED"}, request_date=datetime.utcnow())
        vendor: VendorModel = VendorModel.objects(id=new_cert.validated_data["vendorId"]).first()
        if vendor is None:
            return Response({"error" : "Vendor not found"}, status=status.HTTP_404_NOT_FOUND)
        new_cert.save()
    except Exception as e:
        print(e)
        return Response({"error": "Invalid Data"}, status=status.HTTP_417_EXPECTATION_FAILED)
    return Response(new_cert.validated_data, status=status.HTTP_201_CREATED)

@api_view(["GET"])
def get_vendor_certificate(request):
    data = JSONParser().parse(request)
    cert: CertModel = CertModel.objects(vendorId=data["vendorId"]).first()
    if cert is None:
        return Response({"error": "Vendor not found"}, status=status.HTTP_404_NOT_FOUND)
    return Response(json.loads(cert.to_json()))

@api_view(["GET"])
def get_certificates(request):
    cert = CertModel.objects.all()
    cert_all: list[CertModel] = []
    for c in cert:
        cert_all.append(json.loads(c.to_json()))
    print(cert_all)
    return Response(cert_all)

@api_view(["POST"])
def sign_certificate(request):
    data = JSONParser().parse(request)
    #TODO: Check if admin exists
    cert = CertModel.objects.filter(
            id=data["certificate_id"],
            status__label="NOT VERIFIED"
        )
    if cert is None:
        return Response({"error": "Valid certificate not found"}, status=status.HTTP_404_NOT_FOUND)
    cert.update(signed__authority=data["admin_id"], signed__issuedOn=datetime.now(), status__label="VERIFIED", status__response=data["response"] if "response" in data else "")
    return Response({"message": "signature successful"})

# TODO: updation of certificate
# @api_view
# def update_certification(request):
#     pass

# TODO: renewal of ceritfication
# @api_view
# def renew_certification(request):
#     pass
