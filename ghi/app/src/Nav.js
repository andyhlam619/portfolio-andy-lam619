import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </a>
              <ul className="dropdown-menu" aria-labelledby='navbarDarkDropdownMenuLink'>
                <li><Link className="dropdown-item" to="/models">Vehicle Model List</Link></li>
                <li><Link className="dropdown-item" to="/models/new">Create a Vehicle Model</Link></li>
                <li><Link className="dropdown-item" to="automobiles/">List of Automobiles</Link></li>
                <li><Link className="dropdown-item" to="automobiles/new">Create an Automobile</Link></li>
                <li><Link className="dropdown-item" to="/manufacturers">Manufacturers List</Link></li>
                <li><Link className="dropdown-item" to="/manufacturers/new">Create a Manufacturer</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service Center
              </a>
              <ul className="dropdown-menu" aria-labelledby='navbarDarkDropdownMenuLink'>
                <li><Link className="dropdown-item" to="appointments/">Appointment List</Link></li>
                <li><Link className="dropdown-item" to="appointments/new">Create a Service Appointment</Link></li>
                <li><Link className="dropdown-item" to="history/">Service History</Link></li>
                <li><Link className="dropdown-item" to="technicians/new">Create a Technician</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales Center
              </a>
              <ul className="dropdown-menu" aria-labelledby='navbarDarkDropdownMenuLink'>
                <li><Link className="dropdown-item" to="/sales/new">Create a Sale</Link></li>
                <li><Link className="dropdown-item" to="/customer/new">Create a Customer</Link></li>
                <li><Link className="dropdown-item" to="/sales">Create a Sales Person</Link></li>
                <li><Link className="dropdown-item" to="/sales">List of All Sales</Link></li>
                <li><Link className="dropdown-item" to="/salesperson/sales">Sales History</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
