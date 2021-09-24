const express = require("express");
const jwt = require("jsonwebtoken");
const e = require("express");
const router = express.Router();
const bycrypt = require("bcryptjs");
require("../DB/connection");
const User = require("../modal/userSchema");
const Addproduct = require("../modal/ProductSchema");

// ADMIN ADMIN ADMIN ADMIN ADMIN
//Registration of admin
router.post("/admin", async (req, res) => {
  const { name, email, phone, password, cpassword, image } = req.body;
  if (!name || !email || !phone || !password || !cpassword || !image) {
    return res.status(422).json({ error: "Plz fill" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password does not match !" });
    } else {
      const user = new User({ name, email, phone, password, cpassword, image });

      await user.save();
      res.status(201).json({ message: "User Registered sucessfully !" });
    }
  } catch (err) {
    console.log(err);
  }
});
// LOGIN for admin
router.post("/alogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "pls fill the data" });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bycrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (isMatch) {
        res.status(400).json({ error: "Invalid" });
      } else {
        res.json({ message: "ADMIN Login sucessfull !" });
      }
    } else {
      res.status(400).json({ error: "Invalid" });
    }

    //res.status(400).json({message:"user error"})
    // }
    // else{
    //   res.status(200).json({message:"ADMIN Login sucessfull !"})
    // }
  } catch (err) {
    console.log(err);
  }
});

// USER USER USER USER USER
router.post("/user", async (req, res) => {
  const { name, email, phone, password, cpassword, image } = req.body;
  if (!name || !email || !phone || !password || !cpassword || !image) {
    return res.status(422).json({ error: "Plz fill" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password does not match !" });
    } else {
      const user = new User({ name, email, phone, password, cpassword, image });

      await user.save();
      res.status(201).json({ message: "User Registered sucessfully !" });
    }
  } catch (err) {
    console.log(err);
  }
});
// LOGIN for USER
router.post("/ulogin", async (req, res) => {
  // console.log(req.body)
  // res.json({message:"hello"})
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "pls fill the data" });
    }
    const userLogin = await User.findOne({ email: email });

    if (!userLogin) {
      res.status(400).json({ message: "user error" });
    } else {
      res.status(200).json({ message: "USER Login sucessfull !" });
    }
  } catch (err) {
    console.log(err);
  }
});
// SUPLIER SUPLIER SUPLIER
// Register
router.post("/supplier", async (req, res) => {
  const { name, email, phone, password, cpassword, image } = req.body;
  if (!name || !email || !phone || !password || !cpassword || !image) {
    return res.status(422).json({ error: "Plz fill" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password does not match !" });
    } else {
      const user = new User({ name, email, phone, password, cpassword, image });

      await user.save();
      res.status(201).json({ message: "Supplier Registered sucessfully !" });
    }
  } catch (err) {
    console.log(err);
  }
});
// login
router.post("/slogin", async (req, res) => {
  // console.log(req.body)
  // res.json({message:"hello"})
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "pls fill the data" });
    }
    const userLogin = await User.findOne({ email: email });

    if (!userLogin) {
      res.status(400).json({ message: "user error" });
    } else {
      res.status(200).json({ message: "SUPPLIER Login sucessfull !" });
    }
  } catch (err) {
    console.log(err);
  }
});
// Add products for supplier route
router.post("/Add", async (req, res) => {
  const { name, category, detail, price, image } = req.body;
  if (!name || !category || !detail || !price || !image) {
    return res.status(422).json({ error: "Plz fill" });
  }
  try {
    const productExist = await Addproduct.findOne({ name: name });
    if (productExist) {
      return res.status(422).json({ error: "Product Already exists" });
    } else {
      const add = new Addproduct({ name, category, detail, price, image });

      await add.save();
      res.status(201).json({ message: "Added Sucessfully !" });
    }
  } catch (err) {
    console.log(err);
  }
});
// to get all data of products
router.get("/All", (req, res) => {
  Addproduct.find()
    .then((result) => {
      res.status(200).json({
        productData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
  //res.send("All the data");
});

module.exports = router;
