from django.shortcuts import render
from rest_framework import viewsets, mixins, status
from core.models import Trash, Material

from trash import serializers


class MaterialViewSet(viewsets.ModelViewSet):
    queryset = Material.objects.all()
    serializer_class = serializers.MaterialSerializer


class TrashViewSet(viewsets.ModelViewSet):
    queryset = Trash.objects.all()
    serializer_class = serializers.TrashSerializer

    def get_queryset(self):
        return self.serializer_class

    # def perform_create(self, serializer):
    #     # Create new trash
    #     serializer.save()
    #
    # def perform_update(self, serializer):
    #     # Update new trash
    #     serializer.save()

