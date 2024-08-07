# aliceworkshop/urls.py

from django.urls import path

from aliceworkshop import views

urlpatterns = [
    path('', views.index),
    path("AliceWorkshop/<user>", views.aliceworkshop, name="aliceworkshop")
]

# handler404 = 'aliceworkshop.views.error_404'
# handler500 = 'aliceworkshop.views.error_500'
# handler403 = 'aliceworkshop.views.error_403'
# handler400 = 'aliceworkshop.views.error_400'