from rest_framework import serializers

class LoginWithGoogleSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=500)
