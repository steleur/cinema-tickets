
from django.urls import path, include
from . import views
from .views import *

urlpatterns = [
    path('', views.home_page, name='home'),
    path('<slug:slug>', views.film_page, name='film'),
]
