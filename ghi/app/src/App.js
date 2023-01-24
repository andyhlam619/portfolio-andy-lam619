import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehicleModelForm from './VehicleModelForm';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobileList';
import React, {useEffect, useState} from 'react'
import ManufacturerList from './ListManufacturers';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelList from './ListVehicleModels';
import NewSale from './NewSale';
import ListSales from './ListSales';



function App() {
// Fetching all the data
  const [manufacturers, setManufacturers] = useState([]);
  const fetchManufacturers = async () => {
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers)
      }
  }

  const [models, setModels] = useState([]);
  const fetchModels = async () => {
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setModels(data.models)
      }
  }

  const [automobiles, setAutomobiles] = useState([]);
  const fetchAutomobiles = async () => {
    const url = 'http://localhost:8090/api/automobiles/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAutomobiles(data)
      }
  }

  const [salespersons, setSalesperson] = useState([]);
  const fetchSalesperson = async () => {
    const url = 'http://localhost:8090/api/salesperson/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalesperson(data)
      }
  }

  const [customers, setCustomer] = useState([]);
  const fetchCustomer = async () => {
    const url = 'http://localhost:8090/api/customers/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setCustomer(data)
      }
  }

  const [sales, setSales] = useState([]);
  const fetchSales = async () => {
    const url = 'http://localhost:8090/api/salesrecords/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSales(data)
      }
  }


// Using the effects
  useEffect(() => {
    fetchManufacturers();
    fetchModels();
    fetchAutomobiles();
    fetchSalesperson();
    fetchCustomer();
    fetchSales();
  }, []);

////// OUR JSX
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/automobiles/" element={<AutomobileList />} />
          <Route path="/automobiles/new" element={<AutomobileForm />} />
          <Route path="models/">
            <Route path="" element={<VehicleModelList models={models}/>} />
						<Route path="new/" element={<VehicleModelForm />} />
					</Route>
          <Route path="manufacturers" >
            <Route path="" element={<ManufacturerList manufacturers={manufacturers} />} />
            <Route path="new" element={<ManufacturerForm/>} fetchManufacturers={fetchManufacturers}/>
          </Route>
          <Route path="/sales/new" element={<NewSale automobiles={automobiles} salespersons={salespersons} customers={customers}/>} />
          <Route path="/sales" element={<ListSales sales={sales}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
