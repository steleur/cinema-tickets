
from django.urls import path, include
from . import views
from .views import *
from django.contrib import admin

urlpatterns = [
    path('', views.home_page, name='home'),
    path('<slug:slug>', views.film_page, name='film'),
]
