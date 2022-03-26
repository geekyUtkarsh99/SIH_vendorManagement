from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def api_init(requests):
    return HttpResponse("Hello from API...")


def renderProtocols(request):
    """
    :param request: required for GET,POST
    :return: render the frontend
    """
    return render(request, '../build/index.html')
