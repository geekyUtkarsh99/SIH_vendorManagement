from django.urls import path
from . import views

urlpatterns =[
path('',views.api_init,name='api_init'),
]