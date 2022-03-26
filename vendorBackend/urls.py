from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.api_init, name='api_init'),
    path('', views.renderProtocols, name='renderProtocols'),
]
