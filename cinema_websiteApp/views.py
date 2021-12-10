from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from cinema_websiteApp.models import *
import json

def home_page(request):
    film = Film.objects.all()
    context = {'film': film}
    return render(request, 'home.html', context)


def film_page(request, slug):
    film = Film.objects.get(slug=slug)
    context = {'film': film}
    return render(request, 'film.html', context)


def confirm_order(request):
    if request.method == 'POST':
        response = json.loads(request.body.decode())
        o = Order.objects.create(name=response.get('name'), phone_number=response.get('phone'),
        tickets=response.get('tickets'), film_name=response.get('film'), total_price=response.get('total_price'))
        o.save()
        print(request.body.decode())
        return HttpResponse(status=200)
