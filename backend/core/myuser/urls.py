from django.urls import path

from .views import LoginWithGoogle

urlpatterns = [
    path('login-with-google/', LoginWithGoogle.as_view(), name='login-with-google')
]