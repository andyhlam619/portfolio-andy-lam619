import { NavLink } from 'react-router-dom';


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
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">
                Vehicle Model List
              </NavLink>
          </li>
          <li className="nav-item">
						<NavLink className="nav-link" to="models/new">
							Create a Vehicle Model
						</NavLink>
					</li>
          <li className="nav-item">
						<NavLink className="nav-link" to="automobiles/new">
							Create an Automobile
						</NavLink>
					</li>
          <li className="nav-item">
            <NavLink className="nav-link" to="automobiles/">
							List of Automobiles
					  </NavLink>
          </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">
                Manufacturers List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/new">
                Manufacturers Form
              </NavLink>
            </li>
            <li className="nav-item">
						<NavLink className="nav-link" to="appointments/new">
							Create Appointment
						</NavLink>
					</li>
          <li className="nav-item">
						<NavLink className="nav-link" to="appointments/">
							Appointment List
						</NavLink>
					</li>
          <li className="nav-item">
						<NavLink className="nav-link" to="technicians/new">
							Enter a Technitian
						</NavLink>
					</li>
          <li className="nav-item">
						<NavLink className="nav-link" to="appointments/">
							Enter Service Appointment
						</NavLink>
					</li>
            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/new">
                Appointment List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/new">
                Enter a Technitian
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/new">
                Enter Service Appointment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/new">
                Make a sale
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales">
                List of All Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesperson/new">
                Add a Sales Person
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesperson/sales">
                Sales History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer/new">
                Add a Customer
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
