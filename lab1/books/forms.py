from django import forms
from authors.models import Author
from .models import Book

class NewBookForm(forms.Form):
    name = forms.CharField(max_length=200,required=True)
    latest_version = forms.IntegerField()
    image = forms.FileField(max_length=100)
    author=forms.ChoiceField(choices=Author.Get_all())


class NewBookFormModel(forms.ModelForm):
    class Meta:
        model=Book
        fields=['name','latest_version','image','author']
        widgets = {
            'image': forms.FileInput
        }
