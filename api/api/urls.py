from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/trash/', include('trash.urls')),
    path('api/message/', include('message.urls')),
]
