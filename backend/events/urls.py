from django.urls import path, include
from rest_framework.routers import DefaultRouter

from events import views

router = DefaultRouter()
router.register('', views.EventsViewSet)

urlpatterns = [
    path('',include(router.urls))
]