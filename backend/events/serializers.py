from rest_framework.serializers import ModelSerializer

from events.models import Events


class EventsSerializers(ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'
