
from django.urls import path
from .views import home

app_name= "tafahom"
urlpatterns = [
    path('', home,name="home",)
    
]