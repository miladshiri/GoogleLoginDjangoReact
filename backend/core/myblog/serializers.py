from rest_framework.serializers import ModelSerializer

from .models import MyPost

class MyPostSerializer(ModelSerializer):
    class Meta:
        model = MyPost
        fields = ['id', 'title', 'public']

class MyPostDetailSerializer(ModelSerializer):
    class Meta:
        model = MyPost
        fields = ['id', 'title', 'body', 'public']