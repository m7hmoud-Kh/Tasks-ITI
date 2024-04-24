from django.urls import path, include
from . import views
urlpatterns = [
    path('/', views.index,name='index'),
    path('/add',views.store,name='store'),
    path('/<id>/update',views.update,name='update'),
    path('/<id>',views.show,name='show'),
    path('/<id>/delete',views.destory,name='destory')
]
