from rest_framework import viewsets, mixins
from core.models import Message

from message.serializers import MessageSerializer

from rest_framework import permissions


class MessageViewSet(viewsets.GenericViewSet,
                     mixins.ListModelMixin,
                     mixins.CreateModelMixin,
                     mixins.RetrieveModelMixin):

    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def get_permissions(self):
        if self.action == 'retrieve':
            return [permissions.IsAdminUser(), ]
        if self.action == 'list':
            return [permissions.IsAdminUser(), ]

        return [permissions.AllowAny(), ]

    def get_queryset(self):
        queryset = self.queryset
        return queryset

    def perform_create(self, serializer):
        serializer.save()
