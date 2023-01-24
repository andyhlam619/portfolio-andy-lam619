from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import AutomobileVO, SalesPerson, Customer, SalesRecord
from common.json import ModelEncoder


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["import_href", "color", "year", "vin", "available"]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_number", "id"]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "address", "phone_number", "id"]


class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["automobile", "sales_person", "customer", "price", "id"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }

    def get_extra_data(self, o):
        return {"automobile": o.automobile.vin}


# sales person ##


@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
    if request.method == "POST":
        content = json.loads(request.body)
        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_salesperson(request, pk):
    if request.method == "GET":
        saleperson = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            saleperson,
            encoder=SalesPersonEncoder,
            safe=False
        )
    if request.method == "DELETE":
        salesperson = SalesPerson.objects.get(id=pk)
        salesperson.delete()
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )

# customers ##


@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
    if request.method == "POST":
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_customer(request, pk):
    if request.method == "GET":
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )
    if request.method == "DELETE":
        customer = Customer.objects.get(id=pk)
        customer.delete()
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

# sales record ##


@require_http_methods(["GET", "POST"])
def api_list_salesrecords(request):
    if request.method == "GET":
        record = SalesRecord.objects.all()
        return JsonResponse(
                record,
                encoder=SalesRecordEncoder,
                safe=False,
            )
    if request.method == "POST":
        content = json.loads(request.body)
        try:
            automobile_href = content["automobile"]
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["automobile"] = automobile

            customer_name = content["customer"]
            customer = Customer.objects.get(name=customer_name)
            content["customer"] = customer

            sales_person = content["sales_person"]
            salesperson = SalesPerson.objects.get(name=sales_person)
            content["sales_person"] = salesperson

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile href"},
                status=400,
            )

        record = SalesRecord.objects.create(**content)
        return JsonResponse(
            record,
            encoder=SalesRecordEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_salesrecord(request, pk):
    if request.method == "GET":
        record = SalesRecord.objects.get(id=pk)
        return JsonResponse(
            record,
            encoder=SalesRecordEncoder,
            safe=False
        )
    if request.method == "DELETE":
        record = SalesRecord.objects.get(id=pk)
        record.delete()
        return JsonResponse(
            record,
            encoder=SalesRecordEncoder,
            safe=False,
        )




##


@require_http_methods(["GET"])
def api_list_automobiles(request):
    if request.method == "GET":
        cars = AutomobileVO.objects.all()
        return JsonResponse(
            cars,
            encoder=AutomobileVOEncoder,
            safe=False,
        )
