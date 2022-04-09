from django.urls import path
from . import views
from . import vendorViews
from rest_framework_simplejwt import views as jwt_views
from . import CustomerView

urlpatterns = [
    path('api/', views.api_init, name='api_init'),
    path('', views.renderProtocols, name='renderProtocols'),
    path('api/test',views.create_Test),
    # Vendor
    path('api/register',vendorViews.register, name="register"),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    # Customer Feedback / Complaint
    path('api/feedback',CustomerView.feedback, name="feedback"),
    path('api/complain',CustomerView.complain, name="complain"),
    # Admin 
    path('api/admin/login',views.login_admin)
]
