import React, { useState } from "react";
const AddProducts = () => {
  const [add, setAdd] = useState({
    name: "",
    category: "",
    detail: "",
    price: "",
    image: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setAdd({
      ...add,
      [name]: value,
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, category, detail, price, image } = add;
    const res = await fetch("/Add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        category,
        detail,
        price,
        image,
      }),
    });
    const data = res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Details !!");
    } else {
      window.alert("Sucessfully Added!");
      //  history.push("/");
    }
  };

  return (
    <>
      <div className="Add">
        <h2>Add the Products</h2>
        <form method="POST" className="add-form" id="add-form">
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              className="input3"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={add.name}
              onChange={handleInputs}
              placeholder=" Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category"></label>
            <input
              className="input3"
              type="text"
              name="category"
              id="category"
              autoComplete="off"
              value={add.category}
              onChange={handleInputs}
              placeholder="Category"
            />
          </div>
          <div className="form-group">
            <label htmlFor="details"></label>
            <input
              className="input3"
              type="text"
              name="detail"
              id="details"
              autoComplete="off"
              value={add.detail}
              onChange={handleInputs}
              placeholder=" Details"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price"></label>
            <input
              className="input3"
              type="text"
              name="price"
              id="price"
              autoComplete="off"
              value={add.price}
              onChange={handleInputs}
              placeholder="Price"
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              name="image"
              value={add.image}
              onChange={handleInputs}
              className="form-control-file"
              id="exampleFormControlFile1"
              style={{ color: "white" }}
            />
          </div>
          <div className="form-group form-button">
            <input
              type="submit"
              name="add"
              id="add"
              className="form-submits"
              value="Add Products"
              onClick={PostData}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProducts;
