from django.contrib import admin

# Register your models here.
from cinema_websiteApp.models import *


@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'description')
    prepopulated_fields = {"slug": ("name",)}

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('film_name', 'name', 'phone_number', 'tickets','total_price')