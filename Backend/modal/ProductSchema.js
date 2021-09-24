const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // tokens:[
  //     {
  //         token:{
  //             type:String,
  //             required:true
  //         }
  //  }

  //]
});

const Addproduct = mongoose.model("ADD", ProductSchema);
module.exports = Addproduct;
