from django.urls import path

from .views import PostList, PostDetail

urlpatterns = [
    path('posts/', PostList.as_view(), name='posts'),
    path('post/<str:pk>', PostDetail.as_view(), name='post')
]