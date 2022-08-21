"""
    author: Ashwin
    description: Contains views concerned with login, registration and authentication
"""

from datetime import datetime, timedelta
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from vendorBackend.models import SessionModel, VendorModel, session
import jwt

@api_view(["POST"])
def register(request):
    """
    This method registers the user
    """
    data = JSONParser().parse(request)
    print(data)
    new_vendor = VendorModel(username=data["username"], password=data["password"], email=data["email"])
    new_vendor.save()
    payload = {
            "id": str(new_vendor.id),
            "exp": datetime.utcnow() + timedelta(minutes=60),
            "iat": datetime.utcnow()
        }

    token = jwt.encode(payload, 'secret_need_to_be_assigned', algorithm="HS256").format('utf-8') 
    new_session = SessionModel(token = token)
    new_vendor.update(session=new_session)
    response = Response()
    response.set_cookie(key="jwt", value=token, httponly=True)
    response.data = {
            "token": token,
            "id": str(new_vendor.id)
            }

    return response 

@api_view(["POST"])
def auth_token(request):
    """
    authenticate the user using the token
    """
    token = JSONParser().parse(request)
    decoded_data = jwt.decode(token["token"], 'secret_need_to_be_assigned', algorithms=['HS256'])
    user = VendorModel.objects(id=decoded_data["id"]).first()
    if user is None or not checkValid(user.session.token):
        return Response({"Authentication Failed": "Invalid Token"})
    print(user.to_json())
    return Response({
            "token": user.session.token, 
            "id": str(user.id)
        })

@api_view(["POST"])
def logout(request):
    """
    logouts a user by removing cookie
    """
    response = Response()
    response.delete_cookie('jwt')
    response.data = {
            "message": "Success"
        }
    return response
    

@api_view(["POST"])
def login(request):
    """
    login user using email and password
    """

    # Getting data
    data = JSONParser().parse(request)
    email = data["email"]
    password = data["password"]

    # Fetching user & Authenticating
    user: VendorModel =  VendorModel.objects(email=email).first()
    if user is None:
        return Response({"Authentication Failed": "User not Found"})
    if not user["password"] == password:
        return Response({"Authentication Failed": "Incorrect Password"})


    # Validating token
    token = ''

    if user.session != None and checkValid(user.session.token):
        # Return the same token if previous token is valid
        token = user.session.token
    else:
        # Create a new token and update the user
        token = createToken(str(user["id"]))
        new_session = SessionModel(token=token)
        user.update(session=new_session)

    # Send back response as a token
    response = Response()
    response.set_cookie(key="jwt", value=token, httponly=True)
    response.data = {
            "token": token
            }

    return response 


# Utility functions

def createToken(id: str) -> str:
    """
    Returns a access token
    """
    payload = {
            "id": id,
            "exp": datetime.utcnow() + timedelta(minutes=60),
            "iat": datetime.utcnow()
        }
    token = jwt.encode(payload, 'secret_need_to_be_assigned', algorithm="HS256").format('utf-8') 
    return token

def checkValid(token: str) -> bool:
    data = jwt.decode(token, 'secret_need_to_be_assigned', algorithms=["HS256"])
    token_validtill = datetime.fromtimestamp(data["exp"])
    if datetime.now() > token_validtill:
        return False
    return True 
