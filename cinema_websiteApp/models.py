from django.db import models


class Film(models.Model):
    name = models.CharField(max_length=60)
    price = models.FloatField()
    description = models.TextField()
    picture = models.ImageField()
    duration = models.CharField(max_length=60)
    genre = models.CharField(max_length=60)
    age = models.CharField(max_length=60)
    slug = models.SlugField(max_length=60, null=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    film_name = models.CharField(max_length=60)
    name = models.CharField(max_length=60)
    phone_number = models.CharField(max_length=20)
    tickets = models.IntegerField()
    total_price = models.FloatField()