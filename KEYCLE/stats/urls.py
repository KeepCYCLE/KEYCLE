from django.urls import path
from . import views

app_name = 'stats'

urlpatterns = [
    path('incorrectRateUpdate', views.incorrectRateUpdate),
    path('incorrectRate', views.incorrectRate),
]