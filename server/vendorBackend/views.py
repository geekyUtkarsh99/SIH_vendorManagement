import datetime
import json
import time

import jwt
from mongoengine.queryset import update
from rest_framework.response import Response

from . import utils
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from .serializers import TestSerializer, adminSerializer, SchemeSerializer, AreaSerializer
from .models import TestModel
from rest_framework import status, request as req
from .MongoOperations import mdbHandler as mdops
from werkzeug.security import generate_password_hash, check_password_hash
from .models import admin, Area, vendor_id, SchemesModel, LicenseModel
from .vendor_views import auth
import cloudinary
import cloudinary.uploader
from datetime import datetime as dt
import ast

config = cloudinary.config(
    secure=True,
    api_key="879963674368385",
    api_secret="TiBlP74DD9AxmdTqK8r1oOWCPQE",
    cloud_name="sristspace"
)


def check_user_existence(uid):
    try:
        admin_querey = admin.objects.get(admin_id=uid)
        return True
    except:
        return False


def require_token(func):
    def wrapper(request):
        # try:
        if 'jwtToken' in request.headers:
            token = request.headers['jwtToken']
        else:
            return JsonResponse({"message": "token is missing", "status": 400},
                                status=status.HTTP_400_BAD_REQUEST, safe=False)
        data = jwt.decode(token, 'secret_need_to_be_assigned', algorithms=['HS256'])
        print(data['id'])
        if check_user_existence(data['id']):
            return func(request)
        else:
            return JsonResponse({"message": "token incorrect", "status": 500},
                                status=status.HTTP_500_INTERNAL_SERVER_ERROR, safe=False)

    # except:
    #     return JsonResponse({"message": "token expired", "status": 500},
    #                         status=status.HTTP_500_INTERNAL_SERVER_ERROR, safe=False)

    return wrapper


# Create your views here.

def api_init():
    return Response("Hello from api..")


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

        token = auth.createToken(admin.objects.get(username=uid).admin_id)
        return JsonResponse({"jwtToken": token, "status": 200}, status=status.HTTP_200_OK, safe=False)
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
    # try:
    postdata = request.data
    # postdata['area']['area_id'] = utils.create_random_token(16)
    # admin_query = admin.objects(admin_id=postdata['admin_id']).get()
    # print(postdata)
    # area_new = Area(**postdata['area'])
    # admin_query.Area.append(area_new)
    # admin_query.save()
    try:
        area = Area(area_id=utils.create_random_token(16)
                    , lat=postdata['lat'],
                    long=postdata['long'],
                    name=postdata['name']
                    , ven_no=postdata['ven_no'],
                    ven_limit=postdata['ven_limit'], radius=postdata['radius'], city=postdata['city'])
        area.save()

        return JsonResponse({"status": 200, "message": "success"}, status=status.HTTP_200_OK, safe=False)
    except:
        return JsonResponse({"message": "Invalid Area"}, status=status.HTTP_406_NOT_ACCEPTABLE, safe=False)


# else :


# except:
#     return JsonResponse({"message": "Invalid Area"}, status=status.HTTP_406_NOT_ACCEPTABLE, safe=False)


@api_view(['GET', 'POST'])
def get_location(request):
    payload = request.data
    # try:
    admin_query = Area.objects(city=payload['city'])
    ls = []
    for i in admin_query:
        ls.append(json.loads(i.to_json()))

    print(ls)
    return JsonResponse({"status": 200, 'response': ls}, status=status.HTTP_200_OK, safe=False)


# except:
#     return JsonResponse({"status": 500, "message": "failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR,
#                         safe=False)


@api_view(['POST'])
@require_token
def add_vendor_to_location(request):
    payload = request.data
    admin_query = admin.objects.get(Area__area_id=payload['area_id'])

    for j in admin_query.Area:
        ven_info = vendor_id(ven_id=payload['vendor_id'])
        if j.area_id == payload['area_id']:
            j.ven_no.append(ven_info)
    admin_query.save()
    return JsonResponse({"status": 200, "message": "success"}, status=status.HTTP_200_OK, safe=False)


@api_view(['POST'])
def add_scheme_post(request):
    data = JSONParser().parse(request)
    # cloudinary operations
    schemes = SchemesModel(
        admin_id=data['admin_id'],
        city=data['city'],
        title=data['title'],
        description=data["description"],
    )
    schemes.save()
    schemes.update(
        image=upload_image(data["image_base"], str(schemes.id))
    )
    return JsonResponse({"status": 200, "message": "success"}, status=status.HTTP_200_OK, safe=False)


@api_view(['POST'])
def update_scheme_post(request):
    data = JSONParser().parse(request)
    # cloudinary operations
    schemes_query = SchemesModel.objects(id=data["scheme_id"]).first()
    schemes_query.update(
        title=data["title"],
        description=data["description"],
        image=upload_image(data["image"], str(schemes_query.id))
    )
    return JsonResponse({"status": 200, "message": "success"}, status=status.HTTP_200_OK, safe=False)


@api_view(['POST'])
def delete_scheme_post(request):
    data = JSONParser().parse(request)
    # cloudinary operations
    schemes_query = SchemesModel.objects(id=data["scheme_id"]).first()
    schemes_query.delete()
    return JsonResponse({"status": 200, "message": "success"}, status=status.HTTP_200_OK, safe=False)


@api_view(['POST'])
def get_schemes(request):
    payload = JSONParser().parse(request)

    if payload['type'] == 0:
        schemes_query = SchemesModel.objects(admin_id=payload['admin_id'])
        ls = []
        for i in schemes_query:
            print(i)
            ls.append(json.loads(i.to_json()))

        return JsonResponse({"status": 200, "response": ls}, status=status.HTTP_200_OK, safe=False)
    elif payload['type'] == 1:
        schemes_query = SchemesModel.objects(city=payload['city'])
        ls = []
        for i in schemes_query:
            print(i)
            ls.append(json.loads(i.to_json()))

        return JsonResponse({"status": 200, "response": ls}, status=status.HTTP_200_OK, safe=False)


@api_view(['POST'])
def validate_location(request):
    payload = request.data
    # lic_frame = LicenseModel.objects(id=payload['id'])
    # j_data = None
    # for i in lic_frame:
    #     j_data = i.to_json()
    #     print(j_data)
    # j_data = json.loads(j_data)

    '''
    0 - inside 
    1 - early 
    2 - late
    3 - outside 
    '''
    area = Area.objects(area_id=payload['area_id'])
    ar_data = None
    for j in area:
        ar_data = json.loads(j.to_json())
        # print(j.to_json())

    dist = utils.get_dist(payload['lat'], payload['long'], ar_data['lat'], ar_data['long'], ar_data['radius'])
    # print("dist :", dist)
    t = datetime.time()
    cur_time = datetime.datetime(1947, 12,1, t.hour, t.minute)

    if dist < ar_data['radius']:
        ls = payload['open_time']
        open_t = datetime.datetime(1947, 12,1, ls[0], ls[1])
        ls1 = payload['close_time']
        close_t = datetime.datetime(1947, 12,1, ls1[0], ls1[1])

        print("cur_time: ", cur_time)
        print("open: " , open_t)
        print("close: " , close_t)

        if cur_time < open_t:
            return JsonResponse({"status": 200, "response": 1}, status=status.HTTP_200_OK, safe=False)

        if cur_time > close_t:
            return JsonResponse({"status": 200, "response": 2}, status=status.HTTP_200_OK, safe=False)

        return JsonResponse({"status": 200, "response": 0}, status=status.HTTP_200_OK, safe=False)

    return JsonResponse({"status": 200, "response": 3}, status=status.HTTP_200_OK, safe=False)


"""
utility functions 
"""


def upload_image(img_src, id):
    cloudinary.uploader.upload("data:image/png;base64," + img_src, public_id=id, unique_filename=False, overwrite=True,
                               folder="SIH")
    srcURL = cloudinary.CloudinaryImage(id).build_url()
    return srcURL


# for test
if __name__ == '__main__':
    check_user_existence("dbjPm4b7zYWhX95x")
