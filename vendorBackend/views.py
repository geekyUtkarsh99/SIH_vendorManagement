from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from vendorBackend.serializers import TestSerializer
from vendorBackend.models import TestModel
from rest_framework import status


# Create your views here.

def api_init(requests):
    return HttpResponse("Hello from API...")


def renderProtocols(request):
    """
    :param request: required for GET,POST
    :return: render the frontend
    """
    return render(request, '../build/index.html')


# database calls
@api_view(['POST'])
def create_Test(request):
    datablock = JSONParser().parse(request)
    serialized_data = TestSerializer(data=datablock)
    if serialized_data.is_valid():
        serialized_data.save()
        return JsonResponse({"status": 201}, status.HTTP_201_CREATED)
    else:
        return JsonResponse(TestSerializer.errors, status.HTTP_400_BAD_REQUEST)
