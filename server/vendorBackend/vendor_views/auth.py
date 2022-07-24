"""
    author: Ashwin
    description: Contains views concerned with login, registration and authentication
"""

from datetime import datetime, timedelta
from rest_framework.decorators import api_view
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from vendorBackend.models import VendorModel
import jwt

@api_view(["POST"])
def register(request):
    """
    This method registers the user
    """
    data = JSONParser().parse(request)
    new_vendor = VendorModel(username=data["username"], password=data["password"], email=data["email"])
    # new_session = None
    # new_vendor.session = new_session
    new_vendor.save()
    print(new_vendor.to_json())
    return Response({"message" : "Success"})

@api_view(["POST"])
def auth_token(request):
    """
    authenticate the user using the token
    """
    token = JSONParser().parse(request)["token"]
    return Response("got it")

@api_view(["POST"])
def login(request):
    """
    login user using email and password
    """
    data = JSONParser().parse(request)
    email = data["email"]
    password = data["password"]
    user =  VendorModel.objects(email=email).first()
    if user is None:
        return Response({"Authentication Failed": "User not Found"})
    if not user["password"] == password:
        return Response({"Authentication Failed": "Incorrect Password"})

    payload = {
            "id": str(user["id"]),
            "exp": datetime.utcnow() + timedelta(minutes=60),
            "iat": datetime.utcnow()
            }

    token = jwt.encode(payload, 'secret_need_to_be_assigned', algorithm="HS256").decode('utf-8') 

    response = Response()
    response.set_cookie(key="jwt", value=token, httponly=True)
    response.data = {
            "jwt": token
            }

    return response 

