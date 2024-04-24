from django.db import models

# Create your models here.
from authors.models import Author

class Book(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=200)
    publish_date=models.DateTimeField(auto_now_add=True)
    image=models.CharField(max_length=100,blank=True)
    latest_version=models.IntegerField(default=1)
    latest_version_date=models.DateTimeField(auto_now=True)
    author = models.ForeignKey(Author,on_delete=models.CASCADE)

    @classmethod
    def addbook(cls,name,latest_version,image,authorid):
        author=Author.objects.get(id=authorid)
        Book.objects.create(name=name,latest_version=latest_version,image=image,author=author)
        return True

    @classmethod
    def updateBook(cls,id,name,latest_version,image,authorid):
        author=Author.objects.get(id=authorid)
        Book.objects.filter(id=id).update(name=name,latest_version=latest_version,image=image,author=author)
        return True


    @classmethod
    def updateBookWithoutImage(cls,id,name,latest_version,authorid):
        author=Author.objects.get(id=authorid)
        Book.objects.filter(id=id).update(name=name,latest_version=latest_version,author=author)
        return True