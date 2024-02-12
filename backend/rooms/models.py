from django.db import models

class Rooms(models.Model):
    id = models.IntegerField(primary_key=True)
    max = models.IntegerField()
    room = models.TextField()
