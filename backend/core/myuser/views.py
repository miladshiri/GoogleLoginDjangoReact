from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from . import utils

from .serializers import LoginWithGoogleSerializer

class LoginWithGoogle(APIView):

    def post(self, request):
        if 'code' in request.data.keys():
            code = request.data['code']
            id_token = utils.get_id_token_with_code_method_1(code)
            user_email = id_token['email']
            print(user_email)


        return Response(status=status.HTTP_400_BAD_REQUEST)
    
