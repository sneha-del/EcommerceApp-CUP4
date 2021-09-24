// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const Checkout = ({
//   match: {
//     params: { name },
//   },
// }) => {
//   const [data, setData] = useState({});
//   const [productData, setProductData] = useState([]);
//   const getViewDetails = () => {};

//   useEffect(() => {
//     axios
//       .get(`/All/${name}`)
//       .then((res) => setProductData(res.data.productData))
//       .catch((error) => console.log(error));

//     console.log(productData);
//   });

// useEffect(() => {
//   axios.get("/All").then((res) => setProductData(res.data.productData));
//   console.log(productData);
//   // getViewDetails();
// }, []);
// console.log(data);
//   return (
//     <>
//       <h1>hi</h1>
//     </>
//   );
// };

// export default Checkout;
