import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
          Ecom App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
        <NavLink className="nav-link" to="/admin">Admin Register</NavLink>
      </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/alogin">
                Admin Login
              </NavLink>
            </li>
            {/* <li className="nav-item"> */}
            {/* <NavLink className="nav-link" to="/sup">
                Supplier Register
              </NavLink> */}
            {/* </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/supl">
                Supplier Login
              </NavLink>
            </li>
            {/* <li className="nav-item"> */}
            {/* <NavLink className="nav-link" to="/user">
                User Register
              </NavLink> */}
            {/* </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/userl">
                User Login
              </NavLink>
            </li>
          </ul>
          <button className="nav-item" onClick={logout}>
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
