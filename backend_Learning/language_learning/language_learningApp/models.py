from django.db import models

# Create your models here.

class Language(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=30)
    email=models.EmailField(("email"), max_length=254)
    def __str__(self):
        return self.name
