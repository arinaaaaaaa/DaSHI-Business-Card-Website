from django.db import models

class Partner(models.Model):
    name = models.CharField(max_length=100, verbose_name='Название')
    address = models.CharField(max_length=100, verbose_name='Адрес', null = True)
    web = models.CharField(max_length=40, verbose_name='Ссылка на сайт', null = True)
    phone = models.CharField(max_length=20, verbose_name='Номер телефона', null = True)
    telegram = models.CharField(max_length=40, verbose_name='Telegram', null = True)
    whatsapp = models.CharField(max_length=40, verbose_name='WhatsApp', null = True)

    def __str__(self):
        return self.name