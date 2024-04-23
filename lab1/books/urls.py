from django.urls import path, include
from . import views
urlpatterns = [
    path('/', views.index,name='index'),
    path('/<id>',views.show,name='show'),
    path('/<id>/delete',views.destory,name='destory')
]
