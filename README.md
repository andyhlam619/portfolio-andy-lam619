# CarCar

Team:

* Person 1 - Andy Lam - Sales
* Person 2 - Mark Ipatzi - Service

# Design
CarCar is an application to manage aspects of an automobile dealership. The main 3 microservices that tie this whole application together is the inventory, service center, and the sales center. The inventory api provides us with Manufacturer, Vehicle Model, and Automobile RESTful API endpoints. The other services will be explained further down below.

* The front-end: React
* The back-end: Django
* The database: PostgreSQL

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
* Look at the top of the page and you will be able to navigate to the different features of the web page. Listed below is a table of the feature and its URL, but you can also click around on the website's navbar to access the features as well.

| Feature          | URL          |
|:-----------------|:-------------|
|List vehicle models|http://localhost:3000/models|
|Create vehicle models|http://localhost:3000/models/new|
|List automobiles|http://localhost:3000/automobiles/|
|Create automobiles|http://localhost:3000/automobiles/new|
|List manufactureres|http://localhost:3000/manufacturers|
|Create manufactureres|http://localhost:3000/manufacturers/new|
|List service appointments|http://localhost:3000/appointments/|
|Create service appointments|http://localhost:3000/appointments/new|
|List service history based on a car's VIN|http://localhost:3000/history/|
|Create a technicion|http://localhost:3000/technicians/new|
|Creating a sale|http://localhost:3000/sales/new|
|Creating a customer|http://localhost:3000/customer/new|
|Creating a sales person|http://localhost:3000/salesperson/new|
|List of all sales|http://localhost:3000/sales|
|List sales history per sales person with a dropdown menu to filter table|http://localhost:3000/salesperson/sales|

#### Context Map
![Design Diagram](https://i.imgur.com/vNHybzt.jpg)


# Service microservice
![Service Models](https://i.imgur.com/7y3z5R3.jpg)

What you are able to do with this Service Microservice is:
* View list of appointments and also check/view the VIP status of a vehicle
* View the service appointment history of a vehicle by searching the VIN number
* Create an appointment by providing a VIN number, date and time of appointment, VIN number, choosing a technician, and a specific reason for a service appointment
* Create a technician by inputting name and employee number

The following models in the Service microservice are:
* AutomobileVo: Fetches automobile data for the Inventory API with the information of VIN and import_href
* Technician Model: Shows a Technician with name and employee_number information
* Appointment Model: Shows an appointment with the descriptions of the owner, vin, technician, date/time, vip, reason, and finished status

What the Service microservice does is lead the service appointments and technicians. Through the use of appointments, you are able to create an appointment, view a vehicle's appointment history by searching its' VIN number, and view a list of active appointments. Additionally, you are allowed to create a technician with the Services microservice which will then allow you to create an appointment by selecting a technician what the Service microservice poller does is get data from the automobile API within the Inventory microservice. The data it is retrieving is the VIN information from the inventory and creating an Automobile VO object. This information is then used to check if the VIN entered into the appointment form has previously been within the automobile inventory. If that is the case, this calls to the concierge to give the customer VIP treatment.

# Sales microservice
![Sales Models](https://i.imgur.com/jNnYql7.jpg)

In our Sales Model, we created 4 models. The first one being a `SalesPerson` with the properties `name` and `employee_number`. The second one being a `Customer` with the properties `name`, `address`, and `phone_number`. We also had a automobile value object that was taken from the `inventory-api`; the model being named `AutomobileVO`. We needed this because of our `SalesRecord` model. This model takes all the other 3 models as a foreign key as its own properties with the addition of a `price` property. To get the `AutomobileVO` data we had to use a poller to take the data from the `inventory-api`. This is how our Sales microservice was integrated with the Inventory microservice.

What this service does is it makes sure we can create sales and keep a history of those sales. The sales history is split into two separate nav links. One where it list all possible sales. The other lists sales based on a sales person's history. The other two componenets are for the ability to create customers and create sales persons.
