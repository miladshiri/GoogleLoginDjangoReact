from django.urls import path

from .views import LoginWithGoogle
from rest_framework_simplejwt.views import TokenVerifyView

urlpatterns = [
    path('login-with-google/', LoginWithGoogle.as_view(), name='login-with-google'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),

]