from django.db.models import Q
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from events.models import Events
from events.serializers import EventsSerializers

class EventsViewSet(ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializers
    permission_classes = [AllowAny]

    @action(detail=False, methods=['DELETE'])
    def remove_default(self,request):
        filtered_qs = self.get_queryset().filter(
            Q(date=request.data['date']) &
            Q(month=request.data['month']) &
            Q(year=request.data['year']) &
            Q(time=request.data['time']) &
            Q(room=request.data['room']) &
            Q(event=request.data['event']) &
            Q(defaultevent=request.data['defaultevent'])
        )
        filtered_qs.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=['DELETE'])
    def clear_events(self,request):
        filtered_qs = self.get_queryset().filter(
            Q(date=request.data['date']) &
            Q(month=request.data['month']) &
            Q(year=request.data['year']) &
            Q(time=request.data['time']) &
            Q(room=request.data['room']) &
            Q(defaultevent=False)
        )
        filtered_qs.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)














