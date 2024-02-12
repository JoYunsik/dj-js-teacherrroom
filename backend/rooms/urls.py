from django.urls import path, include
from rest_framework.routers import DefaultRouter

from rooms import views

router = DefaultRouter()
router.register('', views.RoomsViewSet)

urlpatterns = [
    path('',include(router.urls))
]