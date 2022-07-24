from django.urls import path
from . import views
from vendorBackend.vendor_views import auth
# from rest_framework_simplejwt import views as jwt_views
from . import CustomerView

urlpatterns = [
    # Miscellaneous
    path('api/', views.api_init, name='api_init'),
    path('', views.renderProtocols, name='renderProtocols'),
    path('api/test', views.create_Test),

    # Vendor
    path('api/register', auth.register, name="register"),
    path('api/auth_tkn', auth.auth_token, name="auth_tkn"),
    path('api/login', auth.login, name="login"),

    # Customer Feedback / Complaint
    path('api/feedback', CustomerView.feedback, name="feedback"),
    path('api/complain', CustomerView.complain, name="complain"),

    # Admin 
    path('api/admin/login', views.login_admin),

    # test register admin for model clarity
    path('api/admin/register', views.register_admin),
]
