from django.urls import path
from . import views
from . import vendorViews

urlpatterns = [
    path('api/', views.api_init, name='api_init'),
    path('', views.renderProtocols, name='renderProtocols'),
    path('api/test',views.create_Test),
    path('api/register',vendorViews.register, name="register"),
    path('api/admin/login',views.login_admin)
]
