from django.db import models

# Create your models here.

class Country(models.Model):
    flag = models.CharField(max_length=100)
    name = models.CharField(max_length=20)



