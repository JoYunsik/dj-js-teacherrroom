from rest_framework.serializers import ModelSerializer

from rooms.models import Rooms


class RoomsSerializers(ModelSerializer):
    class Meta:
        model = Rooms
        fields = '__all__'
