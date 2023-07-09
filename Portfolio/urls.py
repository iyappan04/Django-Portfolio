from django.contrib import admin
from django.urls import path
from Main.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home, name="home"),
]
