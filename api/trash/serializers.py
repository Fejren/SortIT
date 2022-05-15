from core.models import Trash, Material
from rest_framework import serializers


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = ('name',)
        read_only_fields = ('id',)


class TrashSerializer(serializers.ModelSerializer):
    material = MaterialSerializer(many=True)

    class Meta:
        model = Trash
        fields = ('name', 'trash_container',
                  'material',
                  'created_at', 'updated_at')
        read_only_fields = ('id',)
