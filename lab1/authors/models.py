from django.db import models

# Create your models here.

class Author(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)

    @classmethod
    def Get_all(cls):
        return [(auth.id,auth.name) for auth in cls.objects.all()]

    def __str__(self) -> str:
        return self.name