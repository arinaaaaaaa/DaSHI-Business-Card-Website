from django.db import models

class News(models.Model):
    title = models.CharField(max_length=200, verbose_name="Заголовок")
    content = models.CharField(max_length=1000, verbose_name="Контент")
    background = models.ImageField(upload_to='images', verbose_name="Фон")

    def __str__(self):
        return self.title

class BigBanner(models.Model):
    title = models.CharField(max_length=80, verbose_name="Заголовок")
    special = models.CharField (max_length=80, verbose_name="Заголовок - выделение")
    titleIcon = models.FileField(upload_to='images', verbose_name="Картинка для заголовка")
    newsLink = models.CharField(max_length=200, verbose_name="Ссылка на новость")
    subtitle = models.CharField(max_length=100, verbose_name="Подзаголовок")
    subtitleIcon = models.FileField(upload_to="images", verbose_name="Картинка для подзаголовка")

    def __str__(self):
        return self.title