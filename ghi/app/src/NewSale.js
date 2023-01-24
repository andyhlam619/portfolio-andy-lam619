import React, {useEffect, useState} from 'react'



function NewSale(props) {
///// This chunk of code handles the submit//////

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.automobile = automobile;
        data.sales_person = sales_person;
        data.customer = customer;
        data.price = price;
        console.log(data);

        const salesrecordUrl = "http://localhost:8090/api/salesrecords/";
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(salesrecordUrl, fetchConfig);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setAutomobile("");
          setSalesPerson("");
          setCustomer("");
          setPrice("");
        }
      }
//state changes///////////////////////////////////////////////////////////////////////////

    const [automobile, setAutomobile] = useState('');
    const handleAutomobileChange = (event) => {
      const value = event.target.value;
      setAutomobile(value);
    }

    const [sales_person, setSalesPerson] = useState('');
    const handleSalesPersonChange = (event) => {
      const value = event.target.value;
      setSalesPerson(value);
    }

    const [customer, setCustomer] = useState('');
    const handleCustomerChange = (event) => {
      const value = event.target.value;
      setCustomer(value);
    }

    const [price, setPrice] = useState('');
    const handlePriceChange = (event) => {
      const value = event.target.value;
      setPrice(value);
    }
//our jsx///////////////////////////////////////////////////////////////////////////
return (
    <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a sales record</h1>
                <form onSubmit={handleSubmit} id="create-sales-record-form">
                    <div className="mb-3">
                        <select value={automobile} onChange={handleAutomobileChange} required id="location" name="location" className="form-select">
                        <option value="">Choose a Automobile</option>
                        {props.automobiles.map(automobile => {
                                return (
                                    <option key={automobile.import_href} value={automobile.import_href}>
                                    {automobile.vin}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <select value={sales_person} onChange={handleSalesPersonChange} required id="location" name="location" className="form-select">
                        <option value="">Choose a Sales Person</option>
                        {props.salespersons.map(salesperson => {
                                return (
                                    <option key={salesperson.id} value={salesperson.name}>
                                        {salesperson.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <select value={customer} onChange={handleCustomerChange} required id="location" name="location" className="form-select">
                        <option value="">Choose a Customer</option>
                        {props.customers.map(customer => {
                                return (
                                    <option key={customer.id} value={customer.name}>
                                        {customer.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={price} onChange={handlePriceChange} placeholder="Price" required type="number" name="price" id="price" className="form-control"/>
                        <label htmlFor="price">Price (Less than 32,000)</label>
                    </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
        </div>
    </div>
);
}

export default NewSale
