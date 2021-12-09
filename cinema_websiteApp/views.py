from django.shortcuts import render

# Create your views here.
from cinema_websiteApp.models import Film


def home_page(request):
    film = Film.objects.all()
    context = {'film': film}
    return render(request, 'home.html', context)


def film_page(request, slug):
    film = Film.objects.get(slug=slug)
    context = {'film': film}
    return render(request, 'film.html', context)

