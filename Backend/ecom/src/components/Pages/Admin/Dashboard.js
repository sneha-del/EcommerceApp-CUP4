import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
import SupplierRegister from "../../SupplierRegister";
const Dashboard = ({ productData }) => {
  const history = useHistory();
  return (
    <>
      <div className="dash">
        <h2>Add User And Supplier</h2>
        {/* user */}
        <div className="dashboard">
          <div className="user">
            <button
              type="button"
              onClick={() => history.push("/user")}
              className="btn btn-danger"
            >
              Add User
            </button>
          </div>
          {/* supplier */}
          <div className="supp">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => history.push("/sup")}
            >
              Add Supplier
            </button>
          </div>
        </div>

        {productData.map((product) => (
          <table className="table table-hover ">
            <thead>
              <tr>
                {/* <th scope="col">S No.</th> */}
                <th scope="col">Name of the Product</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{product.name}</th>
                <td>{product.category}</td>
                <td>{product.detail}</td>
                <td>{product.price}</td>
              </tr>
              {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
