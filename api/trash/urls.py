from django.urls import path, include
from rest_framework.routers import DefaultRouter
from trash import views

router = DefaultRouter()
router.register('materials', views.MaterialViewSet)
router.register('trashes', views.TrashViewSet)

app_name = 'trash'

urlpatterns = [
    path('', include(router.urls))
]
