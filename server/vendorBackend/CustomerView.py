"""
   Author:Ayush
   description:
"""

from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from vendorBackend.serializers import customerSerializer
from vendorBackend.serializers import customercomplainSerializer
from vendorBackend.models import CustomerModel, VendorModel
from vendorBackend.models import CustomercomplainModel
from rest_framework import status



@api_view(['POST'])
def feedback(request):
    """
    This method take feedback from the customer
    """
    datablock = JSONParser().parse(request)
    vendor= VendorModel.objects(id=datablock["vendorId"])
    vendor_feedback = CustomerModel.objects.filter(vendorId=datablock["vendorId"]).count()
    new_rating = vendor_feedback * 0.01 * ((datablock["service"] + datablock["sanitation"] // 2) - vendor.rating)  # New rating as a function of previousrating
    vendor.update(rating=new_rating)
    # print(datablock)
    serializer = customerSerializer(data=datablock) 
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
        return JsonResponse({
            "status"  : 201,
            "message" : "Successfully feedback send",
            }, status=status.HTTP_201_CREATED, safe=False)
    else:
        return JsonResponse({
            "status"  : 400,
            "message" : "internal error",
            }, status=status.HTTP_400_BAD_REQUEST, safe=False)

@api_view(['POST'])
def complain(request):
    """
    This method take feedback from the customer
    """
    datablock = JSONParser().parse(request)
    print(datablock)
    serializer = customercomplainSerializer(data=datablock) 
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
        return JsonResponse({
            "status"  : 201,
            "message" : "Successfully feedback send",
            }, status=status.HTTP_201_CREATED, safe=False)
    else:
        return JsonResponse({
            "status"  : 400,
            "message" : "internal error",
            }, status=status.HTTP_400_BAD_REQUEST, safe=False)
