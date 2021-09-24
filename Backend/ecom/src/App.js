import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminRegister from "./components/AdminRegister";
import "./App.css";
import AdminLogin from "./components/AdminLogin";
import Error from "./components/Error";
import SupplierRegister from "./components/SupplierRegister";
import SupplierLogin from "./components/SupplierLogin";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import AddProducts from "./components/Pages/Supplier/AddProducts";
import AllDisplay from "./components/Pages/Supplier/AllDisplay";
import axios from "axios";
import Dashboard from "./components/Pages/Admin/Dashboard";

const App = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("/All")
      .then((res) => setProductData(res.data.productData))
      .catch((error) => console.log(error));

    //  console.log(productData);
  });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} exact />

          <Route path="/admin" component={AdminRegister} exact />

          <Route path="/alogin" component={AdminLogin} exact />

          <Route path="/sup" component={SupplierRegister} exact />

          <Route path="/supl" component={SupplierLogin} exact />

          <Route path="/user" component={UserRegister} exact />

          <Route path="/userl" component={UserLogin} exact />

          <Route path="/Add" component={AddProducts} exact />
          {/* <Route path="All" component={AllDisplay} exact /> */}
          <Route
            path="/All"
            // component={AllDisplay}
            render={() => <AllDisplay productData={productData} />}
          />

          <Route
            path="/dash"
            render={() => <Dashboard productData={productData} />}
          />
          {/* <Route path="/checkout" component={Checkout} /> */}
          {/* <Route exact path="/edit/:id" component={EditUser} /> */}
          <Route component={Error} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
