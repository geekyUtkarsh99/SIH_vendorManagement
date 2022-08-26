"""
    author:      Ashwin
    description: This field contains views related to transactions on certification
                 i.e creation, updation and renewal
"""

from datetime import datetime
from bson.json_util import json
from rest_framework.exceptions import status
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from vendorBackend.models import CertModel, DocumentModel, VendorModel
import cloudinary

config = cloudinary.config(
    secure=True,
    api_key="879963674368385",
    api_secret="TiBlP74DD9AxmdTqK8r1oOWCPQE",
    cloud_name="sristspace"
)

import cloudinary.uploader


@api_view(["GET"])
def create_certification(request):
    data = JSONParser().parse(request)

    # Checking if already certificate exists
    cert = CertModel.objects.filter(
        vendorId=data["vendorId"],
        status__label="NOT VERIFIED"
    )
    if cert.count() > 0:
        return Response({"error": "Vendor certificate already exists"}, status=status.HTTP_412_PRECONDITION_FAILED)

    # Checking if vendor exists
    vendor: VendorModel = VendorModel.objects(
        id=data["vendorId"]
    ).first()
    if vendor is None:
        return Response({"error": "Vendor not found"}, status=status.HTTP_404_NOT_FOUND)

    # New Certificate
    new_cert = CertModel(
        vendorId=data["vendorId"],
        document=DocumentModel(
            verId=data["document"]["verId"],
            verType=data["document"]["verType"]
        ),
        details=data["details"],
        nominees=data["nominees"],
        status={"label": "NOT VERIFIED"},
        request_date=datetime.utcnow()
    )
    if "profile" in data:
        new_cert.vendor_profile = upload_image(data["profile"], data["vendorId"])
    else:
        return Response({"error": "Resource not found"}, status=status.HTTP_404_NOT_FOUND)

    if "doc_img" in data["document"]:
        new_cert.document.scan = upload_image(data["document"]["doc_img"],
                                              data["vendorId"] + "_" + data["document"]["verType"])
    else:
        return Response({"error": "Resource not found"}, status=status.HTTP_404_NOT_FOUND)

    try:
        new_cert.validate()
        new_cert.save()
    except Exception as e:
        print(e)
        return Response({"error": "Invalid data"}, status=status.HTTP_417_EXPECTATION_FAILED)
    return Response(json.loads(new_cert.to_json()), status=status.HTTP_201_CREATED)


@api_view(["POST"])
def get_vendor_certificate(request):
    data = JSONParser().parse(request)
    cert: CertModel = CertModel.objects(vendorId=data["vendorId"]).first()
    if cert is None:
        return Response({"error": "Not Applied"}, status=status.HTTP_200_OK)
    print(cert.to_json())
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
    # TODO: Check if admin exists
    cert = CertModel.objects.filter(
        id=data["certificate_id"],
        status__label="NOT VERIFIED"
    )
    if cert is None:
        return Response({"error": "Valid certificate not found"}, status=status.HTTP_404_NOT_FOUND)
    cert.update(
            signed__authority=data["admin_id"],
            signed__issuedOn=datetime.now(), 
            status__label="VERIFIED", 
            status__response=data["response"] if "response" in data else ""
            )
    return Response({"message": "signature successful"})


@api_view(["POST"])
def reject_certificate(request):
    data = JSONParser().parse(request)
    # TODO: Check if admin exists
    cert = CertModel.objects.filter(
        id=data["certificate_id"],
        status__label="NOT VERIFIED"
    )
    if cert is None:
        return Response({"error": "Valid certificate not found"}, status=status.HTTP_404_NOT_FOUND)
    cert.update(status__label="REJECTED", status__response=data["response"] if "response" in data else "")
    return Response({"message": "signature successful"})


# TODO: updation of certificate
# @api_view
# def update_certification(request):
#     pass

# TODO: renewal of ceritfication
# @api_view
# def renew_certification(request):
#     pass

# UTILITY FUNCTIONS

def upload_image(img_src, id):
    res = cloudinary.uploader.upload(img_src, public_id=id, unique_filename=False, overwrite=True, folder="sih")
    srcURL = res['url']
    return srcURL
