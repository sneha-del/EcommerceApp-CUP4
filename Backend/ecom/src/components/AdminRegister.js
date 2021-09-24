import React, { useState } from "react";
import adminR from "../images/adminR.jpg";
import { NavLink, useHistory } from "react-router-dom";

const AdminRegister = () => {
  const history = useHistory();
  const [admin, setAdmin] = useState({
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
    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = admin;
    const res = await fetch("/admin", {
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
      history.push("/alogin");
    }
  };

  return (
    <>
      <section className="register-final">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">ADMIN Registration</h2>
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
                    value={admin.name}
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
                    value={admin.email}
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
                    value={admin.phone}
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
                    value={admin.password}
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
                    value={admin.cpassword}
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

              <NavLink to="/alogin" className="signup-login-link">
                I am already registered
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminRegister;
