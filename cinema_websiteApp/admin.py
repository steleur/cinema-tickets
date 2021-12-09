from django.contrib import admin

# Register your models here.
from cinema_websiteApp.models import Film


@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'description')
    prepopulated_fields = {"slug": ("name",)}