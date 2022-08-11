from django.urls import path
from . import views
from .vendor_views import auth
from .vendor_views import certification 
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
    path('api/logout', auth.login, name="login"),

    path('api/create_certificate', certification.create_certification, name="create_certification"),
    path('api/get_certificate', certification.get_vendor_certificate, name="get_certification"),
    path('api/get_all_certificate', certification.get_certificates, name="get_all_certification"),
    path('api/sign_certificate', certification.sign_certificate, name="sign_certificate"),

    # Customer Feedback / Complaint
    path('api/feedback', CustomerView.feedback, name="feedback"),
    path('api/complain', CustomerView.complain, name="complain"),

    # Admin 
    path('api/admin/login', views.login_admin),

    # test register admin for model clarity
    path('api/admin/register', views.register_admin),

    # add new area
    path('api/admin/addarea', views.add_new_location),
    # allocate vendor to location after verification
    path('api/admin/addvendor',views.add_vendor_to_location),
    # get all locations
    path('api/admin/getlocation',views.get_location)
]
