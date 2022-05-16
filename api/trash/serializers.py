from core.models import Trash, Material
from rest_framework import serializers


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = '__all__'
        read_only_fields = ('id',)


class TrashSerializer(serializers.ModelSerializer):
    material = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Material.objects.all()
    )

    class Meta:
        model = Trash
        fields = '__all__'
        read_only_fields = ('id',)


class TrashDetailSerializer(TrashSerializer):
    material = MaterialSerializer(many=True)
