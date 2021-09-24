import React from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-div">
          <marquee width="100%" direction="right" height="100px">
            <h1>Welcome to the Ecommerce App</h1>
          </marquee>

          <i className="zmdi zmdi-shopping-cart"></i>
          <p>Register Yourself as Supplier to Add Products.</p>
          <p>
            register yourself as User to Browse products, Add to cart and
            Checkout.
          </p>
          <p>Register as Admin to Add User And Supplier</p>
        </div>
      </div>
    </>
  );
};

export default Home;
