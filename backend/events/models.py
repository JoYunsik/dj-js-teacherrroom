from django.db import models

class Events(models.Model):
    id = models.IntegerField(primary_key=True)
    date = models.IntegerField()
    year = models.IntegerField()
    month = models.IntegerField()
    time = models.IntegerField()
    room = models.IntegerField()
    defaultevent = models.BooleanField()
    event = models.CharField(max_length=4)
