from bson.json_util import json
from rest_framework.decorators import api_view
from rest_framework.response import Response

from vendorBackend.models import VendorModel


@api_view(["GET"])
def get_vendors(request):
    cert = VendorModel.objects.all()
    cert_all: list[VendorModel] = []
    for c in cert:
        cert_all.append(json.loads(c.to_json()))
    print(cert_all)
    return Response(cert_all)
