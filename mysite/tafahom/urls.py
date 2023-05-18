
from django.urls import path
from .views import TafahomListView,TafahomDetailView

app_name= "tafahom"
urlpatterns = [
    path('', TafahomListView.as_view(),name="home",),
    path('detai/<int:pk>', TafahomDetailView.as_view(),name="detai",)
    
]