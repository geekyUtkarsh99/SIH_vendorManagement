from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from .serializers import TestSerializer, adminSerializer
from .models import TestModel
from rest_framework import status, request as req


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
    password = request.GET['password']
    print("query catch : ", password)
    # datablock = JSONParser().parse(request)
    return JsonResponse({"status": 200}, status=status.HTTP_200_OK, safe=False)


@api_view(['POST'])
def register_admin(request):
    datablock = JSONParser().parse(request)
    serialized_data = adminSerializer(data=datablock)
    if serialized_data.is_valid():
        serialized_data.save()
        return JsonResponse({"status": 201}, status=status.HTTP_201_CREATED, safe=False)
    else:
        JsonResponse({"status": 406}, status=status.HTTP_406_NOT_ACCEPTABLE, safe=False)
