from django.shortcuts import render
from django.views import generic
from .models import Tafahom



class TafahomListView(generic.ListView):
    model=Tafahom  
    template_name = 'tafahom/home.html'  # Specify your own template name/location

    def get_queryset(self):
        return Tafahom.objects.all() # Get 5 books containing the title war

    # def get_context_data(self, **kwargs):
    #   # Call the base implementation first to get the context
    #   context = super(TafahomListView, self).get_context_data(**kwargs)
    #   # Create any data and add it to the context
    #   context['some_data'] = 'This is just some data'
    #   return context

class TafahomDetailView(generic.DetailView):
    model=Tafahom  
    template_name = 'tafahom/detai.html'