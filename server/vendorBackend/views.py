import json

from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from .serializers import TestSerializer, adminSerializer
from .models import TestModel
from rest_framework import status, request as req
from .MongoOperations import mdbHandler as mdops


# Create your views here.

def api_init():
    return HttpResponse("Hello from API...")


def renderProtocols(request):
    """
    :param request: required for GET,POST
    :return: render the frontend
    """
    return render(request, 'index.html')


@api_view(['POST'])
def create_Test(request):
    """
    This method is for test purposes
    :param request: json req
    :return: response json serialized
    """
    datablock = JSONParser().parse(request)
    serialized_data = TestSerializer(data=datablock)
    if serialized_data.is_valid():
        serialized_data.save()
        return JsonResponse({"status": 201, "message": "Successfully added"}, status=status.HTTP_201_CREATED,
                            safe=False)
    else:
        return JsonResponse({"status": 400, "message": "variable error"}, status=status.HTTP_400_BAD_REQUEST,
                            safe=False)


@api_view(['GET'])
def login_admin(request):
    uid = request.GET['uname']
    password = request.GET['pwd']
    print("query catch : ", password)
    if mdops.verify_admin_login(uid,password):
        return JsonResponse({"status": 200}, status=status.HTTP_200_OK, safe=False)
    else :
        return JsonResponse({"status": 401}, status=status.HTTP_401_UNAUTHORIZED, safe=False)


@api_view(['POST'])
def register_admin(request):
    # print(request.body)
    # datablock = json.load(request.body.decode('utf-8'))
    print(request.data)
    serialized_data = adminSerializer(data=request.data)
    if serialized_data.is_valid():
        serialized_data.save()
        return JsonResponse({"status": 201}, status=status.HTTP_201_CREATED, safe=False)
    else:
        JsonResponse({"status": 406}, status=status.HTTP_406_NOT_ACCEPTABLE, safe=False)
    return  JsonResponse({"status": 406}, status=status.HTTP_406_NOT_ACCEPTABLE, safe=False)