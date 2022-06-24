from django.urls import path, include
from message.views import MessageViewSet
from message import routers

router = routers.CustomRouter()
router.register('messages', MessageViewSet)

app_name = 'message'

urlpatterns = [
    path('', include(router.urls))
]

