from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from vendorBackend.serializers import customerSerializer
from vendorBackend.serializers import customercomplainSerializer
from vendorBackend.models import CustomerModel
from vendorBackend.models import CustomercomplainModel
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def feedback(request):
    """
    This method take feedback from the customer
    """
    datablock = JSONParser().parse(request)
    print(datablock)
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



@csrf_exempt
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
