from django.shortcuts import render, redirect
from .models import  *
# Create your views here.
def index(request):
    books = Book.objects.all();
    context = {
        'books' : books
    }
    return render(request,'books/index.html',context)

def show(request,id):
    book = Book.objects.get(id=id)
    context = {
        'book':book
    }
    return render(request,'books/show.html',context)

def destory(request,id):
    Book.objects.filter(id=id).delete()
    return redirect(to='/books')