from django.shortcuts import render, redirect, HttpResponseRedirect
from .models import  *
from .forms import *
import os
from django.conf import settings

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

def store(request):
    context={}
    context['form'] = NewBookForm()
    if(request.method=='POST'):
        if(request.POST['name'] == '' or request.POST['latest_version'] == '' or request.POST['author'] == ''):
            context['msg']="kindly fill all fileds"
        else:
            image_file = request.FILES['image']
            image_name, extion = os.path.splitext(image_file.name)
            image_path = os.path.join(settings.MEDIA_ROOT, f"{image_name}{extion}")
            with open(image_path, 'wb+') as destination:
                for chunk in image_file.chunks():
                    destination.write(chunk)
            Book.addbook(request.POST['name'],request.POST['latest_version'],request.FILES['image'],request.POST['author'])
            return redirect(to='/books')
    return render(request,'books/store.html',context)


def update(request,id):
    context={}
    form=NewBookFormModel(instance=Book.objects.filter(id=id).first())
    if(request.method == 'POST'):
        form = NewBookFormModel(instance=Book.objects.filter(id=id).first(),data=request.POST)
        if(form.is_valid()):
            if request.FILES.get('image'):
                image_file = request.FILES['image']
                image_name,  extion= os.path.splitext(image_file.name)
                image_path = os.path.join(settings.MEDIA_ROOT, f"{image_name}{extion}")
                with open(image_path, 'wb+') as destination:
                    for chunk in image_file.chunks():
                        destination.write(chunk)
                Book.updateBook(id,request.POST['name'],request.POST['latest_version'],image_file.name,request.POST['author'])
            else:
                Book.updateBookWithoutImage(id,request.POST['name'],request.POST['latest_version'],request.POST['author'])
            return redirect(to='/books')
    context['form']=form
    return render(request, 'books/update.html', context)