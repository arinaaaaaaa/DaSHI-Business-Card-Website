from django.db import models

class News(models.Model):
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=1000)
    background = models.ImageField(upload_to='backend/media/images')

    def __str__(self):
        return self.title
