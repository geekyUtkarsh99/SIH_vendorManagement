from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from vendorBackend.serializers import VendorSerializer
from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
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
