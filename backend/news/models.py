from django.db import models
from solo.models import SingletonModel
from django.contrib.postgres.fields import ArrayField

class Topic(models.Model):
    name = models.CharField(max_length=100, verbose_name="Тема")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Тема новости'
        verbose_name_plural = 'Темы новостей'

class News(models.Model):
    title = models.CharField(max_length=200, verbose_name="Заголовок")
    content = models.CharField(max_length=1000, verbose_name="Контент")
    background = models.ImageField(upload_to='images', verbose_name="Фон")
    topics = models.ManyToManyField(Topic, verbose_name="Темы")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

class BigBanner(SingletonModel):
    title = models.CharField(max_length=80, verbose_name="Левый заголовок")
    special = models.CharField (max_length=80, verbose_name="Левый подзаголовок")
    titleIcon = models.FileField(upload_to='images', verbose_name="Левое изображение")
    newsLink = models.CharField(max_length=200, verbose_name="Ссылка")
    subtitle = models.CharField(max_length=100, verbose_name="Правый заголовок")
    subtitleIcon = models.FileField(upload_to="images", verbose_name="Правое изображение")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Баннер на главной странице'
        verbose_name = 'Баннер на главной странице'
