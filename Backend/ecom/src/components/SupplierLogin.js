import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import adminl from "../images/adminl.jpg";

const SupplierLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginSup = async (e) => {
    e.preventDefault();
    const res = await fetch("/slogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Details !!");
    } else {
      window.alert("Sucessful Login!");
      history.push("/Add");
    }
  };
  return (
    <>
      <section className="register">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-form">
              <h2 className="form-title">SUPPLier Login</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    className="input"
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Login"
                    onClick={loginSup}
                  />
                </div>
              </form>
            </div>
            <div className="signin-image">
              <figure>
                <img src={adminl} alt="al" />
              </figure>
              <NavLink to="/sup" className="signin-login-link">
                New User ? Register yourself !
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupplierLogin;
