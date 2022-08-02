import json
from . import utils
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from .serializers import TestSerializer, adminSerializer
from .models import TestModel
from rest_framework import status, request as req
from .MongoOperations import mdbHandler as mdops
from werkzeug.security import generate_password_hash, check_password_hash
from .models import admin, Area


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
    if mdops.verify_admin_login(uid, password):
        return JsonResponse({"status": 200}, status=status.HTTP_200_OK, safe=False)
    else:
        return JsonResponse({"status": 401}, status=status.HTTP_401_UNAUTHORIZED, safe=False)


@api_view(['POST'])
def register_admin(request):
    postdata = request.data
    postdata['password'] = generate_password_hash(postdata['password'], salt_length=16)
    postdata['admin_id'] = utils.create_random_token(16)
    print(postdata)
    serialized_data = adminSerializer(data=postdata)
    if serialized_data.is_valid():
        serialized_data.save()
        return JsonResponse({"status": 201, "message": "success"}, status=status.HTTP_201_CREATED, safe=False)
    else:
        print("error : ", serialized_data.errors)
        return JsonResponse({"status": 406, "message": "failed"}, status=status.HTTP_406_NOT_ACCEPTABLE, safe=False)


@api_view(["POST"])
def add_new_location(request):
    try:
        postdata = request.data
        admin_query = admin.objects(admin_id=postdata['admin_id']).get()
        area_new = Area(**postdata['area'])
        admin_query.Area.append(area_new)
        admin_query.save()
        return JsonResponse({"status": 200, "message": "success"}, status=status.HTTP_200_OK, safe=False)
    except:
        return JsonResponse({"status": 406, "message": "failed"}, status=status.HTTP_406_NOT_ACCEPTABLE, safe=False)


