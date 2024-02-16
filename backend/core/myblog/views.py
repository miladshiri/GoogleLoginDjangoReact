from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from .models import MyPost
from .serializers import MyPostSerializer, MyPostDetailSerializer

class PostList(ListAPIView):
    queryset = MyPost.objects.all()
    serializer_class = MyPostSerializer

class PostDetail(APIView):
    def get_object(self, pk):
        try:
            return MyPost.objects.get(pk=pk)
        except MyPost.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


    def get(self, request, pk, format=None):
        my_post = self.get_object(pk)
        print(request.user)
        print((request.user and request.user.is_authenticated))
        if my_post.public or (request.user and request.user.is_authenticated):
            serializer = MyPostDetailSerializer(my_post)
            return Response(serializer.data)
        return Response(status=status.HTTP_401_UNAUTHORIZED)
        