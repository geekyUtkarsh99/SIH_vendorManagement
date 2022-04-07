from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from vendorBackend.serializers import VendorSerializer
from vendorBackend.models import VendorModel
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def register(request):
    """
    This method registers the user
    """
    datablock = JSONParser().parse(request)
    print(datablock)
    serializer = VendorSerializer(data=datablock) 
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
        return JsonResponse({
            "status"  : 201,
            "message" : "Successfully Registered",
            }, status=status.HTTP_201_CREATED, safe=False)
    else:
        return JsonResponse({
            "status"  : 400,
            "message" : "Registered Error",
            }, status=status.HTTP_400_BAD_REQUEST, safe=False)