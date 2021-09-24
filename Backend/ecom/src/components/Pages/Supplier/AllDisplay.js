import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useHistory } from "react-router";
const AllDisplay = ({ productData }) => {
  const history = useHistory();
  return (
    <>
      <div className="card1">
        {productData.map((product) => (
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.detail}</p>
            <h3 className="card-cat">{product.category}</h3>

            <h3 className="card-price">{product.price}</h3>
            <a href="#" className="btn btn-secondary">
              Add To Favourite
            </a>
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => history.push("/checkout")}
            >
              Checkout
            </a>
          </div>
        ))}
      </div>
      {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
      {/* <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h3 className="card-price">Price</h3>
          <a href="#" className="btn btn-secondary">
            Add To Favourite
          </a>
          <a href="#" className="btn btn-primary">
            Checkout
          </a>
        </div>
      </div> */}
      <br></br>
    </>
  );
};

export default AllDisplay;

// import react, { useState, useEffect } from "react";
// import {
//   Table,
//   TableHead,
//   TableCell,
//   Paper,
//   TableRow,
//   TableBody,
//   Button,
//   makeStyles,
// } from "@material-ui/core";
// import { getUsers, deleteUser } from "./api";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles({
//   table: {
//     width: "90%",
//     margin: "50px 0 0 50px",
//   },
//   thead: {
//     "& > *": {
//       fontSize: 20,
//       background: "#000000",
//       color: "#FFFFFF",
//     },
//   },
//   row: {
//     "& > *": {
//       fontSize: 18,
//     },
//   },
// });

// const AllDisplay = () => {
//   const [users, setUsers] = useState([]);
//   const classNamees = useStyles();

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   const deleteUserData = async (id) => {
//     await deleteUser(id);
//     getAllUsers();
//   };

//   const getAllUsers = async () => {
//     let response = await getUsers();
//     setUsers(response.data);
//   };

//   return (
//     <Table classNameName={classNamees.table}>
//       <TableHead>
//         <TableRow classNameName={classNamees.thead}>
//           <TableCell>Id</TableCell>
//           <TableCell>Name</TableCell>
//           <TableCell>Username</TableCell>
//           <TableCell>Email</TableCell>
//           <TableCell>Phone</TableCell>
//           <TableCell></TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {users.map((user) => (
//           <TableRow classNameName={classNamees.row} key={user._id}>
//             <TableCell>{user._id}</TableCell>
//             <TableCell>{user.name}</TableCell>
//             <TableCell>{user.username}</TableCell>
//             <TableCell>{user.email}</TableCell>
//             <TableCell>{user.phone}</TableCell>
//             <TableCell>
//               <Button
//                 color="primary"
//                 variant="contained"
//                 style={{ marginRight: 10 }}
//                 component={Link}
//                 to={`/edit/${user._id}`}
//               >
//                 Edit
//               </Button>
//               <Button
//                 color="secondary"
//                 variant="contained"
//                 onClick={() => deleteUserData(user._id)}
//               >
//                 Delete
//               </Button>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

// export default AllDisplay;
