import React, {useEffect, useState} from 'react'

function ManufacturerForm(props) {
///// This chunk of code handles the submit//////
const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.name = name;

    const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(manufacturerUrl, fetchConfig);
    if (response.ok) {
      const newMans = await response.json();
      setName("");
      props.fetchManufacturers();
    }
  }
//sets the values of the states depending on the value in our respective inputs///////////////////////////////////////////////////////////////////////////
const [name, setName] = useState('');
    const handleNameChange = (event) => {
      const value = event.target.value;
      setName(value);
    }
//our jsx///////////////////////////////////////////////////////////////////////////
  return (
    <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a manufacturer!</h1>
            <form onSubmit={handleSubmit} id="create-presentation-form">
              <div className="form-floating mb-3">
                <input value={name} onChange={handleNameChange} placeholder="Fabric" required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="name">Name</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default ManufacturerForm
