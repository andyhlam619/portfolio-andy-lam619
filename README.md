# CarCar

Team:

* Person 1 - Andy Lam - Sales
* Person 2 - Mark Ipatzi - Service

## Design
CarCar is an application to manage aspects of an automobile dealership. The main 3 microservices that tie this whole application together is the inventory, service center, and the sales center. The inventory api provides us with Manufacturer, Vehicle Model, and Automobile RESTful API endpoints. The other services will be explained further down below.

The front-end: React
The back-end: Django
The database: PostgreSQL

#### How to run
* Clone the repo: `git clone https://gitlab.com/andyhlam619/car-car.git`
* Open Docker Desktop
* Run the following commands:
```
docker volume create beta-data
docker-compose build
docker-compose up
```
* Go to the website at `localhost:3000`

#### Navigating
* List vehicle models (http://localhost:3000/models)
* Create vehicle models (http://localhost:3000/models/new)
* List automobiles (http://localhost:3000/automobiles/)
* Create automobiles (http://localhost:3000/automobiles/new)
* List manufactureres (http://localhost:3000/manufacturers)
* Create manufactureres (http://localhost:3000/manufacturers/new)
* List service appointments (http://localhost:3000/appointments/)
* Create service appointments (http://localhost:3000/appointments/new)
* List service history based on a car's VIN (http://localhost:3000/history/)
* Create a technicion (http://localhost:3000/technicians/new)
* Creating a sale (http://localhost:3000/sales/new)
* Creating a customer (http://localhost:3000/customer/new)
* Creating a sales person (http://localhost:3000/salesperson/new)
* List of all sales (http://localhost:3000/sales)
* List sales history per sales person with a dropdown menu to filter table (http://localhost:3000/salesperson/sales)

| Feature          | URL          |
|:-----------------|:-------------|
|List vehicle models | http://localhost:3000/models  |
| Second line      | foo          |
| Third line       | quux         |


#### Context Map
![Design Diagram](https://i.imgur.com/vNHybzt.jpg)


## Service microservice
![Service Models](https://i.imgur.com/7y3z5R3.jpg)

Explain your models and integration with the inventory
microservice, here.

## Sales microservice
![Sales Models](https://i.imgur.com/jNnYql7.jpg)

In our Sales Model, we created 4 models. The first one being a `SalesPerson` with the properties `name` and `employee_number`. The second one being a `Customer` with the properties `name`, `address`, and `phone_number`. We also had a automobile value object that was taken from the `inventory-api`; the model being named `AutomobileVO`. We needed this because of our `SalesRecord` model. This model takes all the other 3 models as a foreign key as its own properties with the addition of a `price` property. To get the `AutomobileVO` data we had to use a poller to take the data from the `inventory-api`. This is how our Sales microservice was integrated with the Inventory microservice.
