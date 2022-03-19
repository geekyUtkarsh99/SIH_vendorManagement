from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def api_init(requests):
    return HttpResponse("Hello from API...")
