from django.db import models

class MyPost(models.Model):
    title = models.CharField(max_length=200, null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    public = models.BooleanField(default=True)

    def __str__(self):
        return self.title
