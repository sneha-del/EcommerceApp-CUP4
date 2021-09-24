import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import adminl from "../images/adminl.jpg";
const AdminLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginAdmin = async (e) => {
    e.preventDefault();
    const res = await fetch("/alogin", {
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
      history.push("/dash");
    }
  };
  return (
    <>
      <section className="register">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-form">
              <h2 className="form-title">ADMIN Login</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    className="input"
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
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Login"
                    onClick={loginAdmin}
                  />
                </div>
              </form>
            </div>
            <div className="signin-image">
              <figure>
                <img src={adminl} alt="al" />
              </figure>
              <Link to="/admin" className="signin-login-link">
                New User ? Register yourself !
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
