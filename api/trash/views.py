from rest_framework import viewsets
from core.models import Trash, Material

from trash import serializers


class MaterialViewSet(viewsets.ModelViewSet):
    queryset = Material.objects.all()
    serializer_class = serializers.MaterialSerializer


class TrashViewSet(viewsets.ModelViewSet):
    queryset = Trash.objects.all()
    serializer_class = serializers.TrashSerializer

    def get_serializer_class(self):
        # Return appropriate serializer class
        if self.action == 'retrieve':
            return serializers.TrashDetailSerializer

        return self.serializer_class
