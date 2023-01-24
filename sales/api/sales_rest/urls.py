from django.urls import path

from .views import api_list_salesperson, api_show_salesperson
from .views import api_list_customer, api_show_customer, api_list_salesrecords, api_show_salesrecord, api_list_automobiles

urlpatterns = [
    path("salesperson/", api_list_salesperson, name="api_list_salesperson"),
    path("salesperson/<int:pk>/", api_show_salesperson, name="api_show_salesperson"),
    path("customers/", api_list_customer, name="api_list_customer"),
    path("customers/<int:pk>/", api_show_customer, name="api_show_customer"),
    path("salesrecords/", api_list_salesrecords, name="api_list_salesrecords"),
    path("salesrecords/<int:pk>/", api_show_salesrecord, name="api_show_salesrecord"),
    path("automobiles/", api_list_automobiles, name="api_list_automobile"),
]
