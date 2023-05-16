
from django.urls import path
from .views import TafahomListView

app_name= "tafahom"
urlpatterns = [
    path('', TafahomListView.as_view(),name="home",)
    
]