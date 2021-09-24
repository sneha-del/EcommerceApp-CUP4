import React, { useState } from "react";
import adminR from "../images/adminR.jpg";
import { Link, useHistory } from "react-router-dom";
const SupplierRegister = () => {
  const history = useHistory();
  const [sup, setSup] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setSup({
      ...sup,
      [name]: value,
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = sup;
    const res = await fetch("/supplier", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration !!");
      console.log("Invalid Registration !!");
    } else {
      window.alert("Sucessfful Registration !!");
      console.log("Sucessfful Registration !!");
      history.push("/supl");
    }
  };

  return (
    <>
      <section className="register-final">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">SUPPLIER Registration</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    className="inputs"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={sup.name}
                    onChange={handleInputs}
                    placeholder=" Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    className="inputs"
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={sup.email}
                    onChange={handleInputs}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone"></i>
                  </label>
                  <input
                    className="inputs"
                    type="Number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={sup.phone}
                    onChange={handleInputs}
                    placeholder=" Phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    className="inputs"
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={sup.password}
                    onChange={handleInputs}
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    className="inputs"
                    type="text"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={sup.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={adminR} alt="ar" height="400" width="400" />
              </figure>
              <Link to="/supl" className="signup-login-link">
                I am already registered
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupplierRegister;
