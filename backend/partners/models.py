from django.db import models

class Partner(models.Model):
    name = models.CharField(max_length=100, verbose_name='Название')
    address = models.CharField(max_length=100, verbose_name='Адрес', blank=True)
    web = models.CharField(max_length=40, verbose_name='Ссылка на сайт', blank=True)
    phone = models.CharField(max_length=20, verbose_name='Номер телефона', blank=True)
    telegram = models.CharField(max_length=40, verbose_name='Telegram', blank = True)
    whatsapp = models.CharField(max_length=40, verbose_name='WhatsApp', blank = True)

    def __str__(self):
        return self.name