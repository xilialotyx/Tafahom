
from django.urls import path
from .views import TafahomListView,tafahom_details,download_file

app_name= "tafahom"
urlpatterns = [
    path('', TafahomListView.as_view(),name="list",),
    path('detai/<int:tafahom_id>', tafahom_details,name="detail",),
    path('download/<str:file_name>', download_file, name='download_file'),
    
]