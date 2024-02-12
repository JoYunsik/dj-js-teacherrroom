from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from rooms.models import Rooms
from rooms.serializers import RoomsSerializers

class RoomsViewSet(ModelViewSet):
    queryset = Rooms.objects.all()
    serializer_class = RoomsSerializers
    permission_classes = [AllowAny]