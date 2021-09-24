const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();
// connection

require("./DB/connection");
app.use(express.json());
//const User=require('./modal/userSchema')
app.use(require("./routes/auth"));

// Middleware
// const middleware=(req,res,next)=>{
// console.log("Midlleware")
// next();
// }
// middleware();

// app.get('/',(req,res)=>{
// res.send("Hello from the server");
// })
// app.get('/admin', middleware,(req,res)=>{
//     res.send(`ADIMIN login/signup`)
// })
// app.get('/supplier',(req,res)=>{
//     res.send(`SUPPLIER LOgin/signup`)
// })
// app.get('/user',(req,res)=>{
//     res.send(`USER login/signup`)
// })
// app.get('/contact',(req,res)=>{
//     res.send(`CONTACT US PAGE`)

// })
// app.get('/about',middleware,(req,res)=>{
//     res.send(`ABOUT ME PAGE`)
// })
// step 3 heroku
if (process.env.NODE_ENV == "production") {
  app.use(express.static("ecom/build"));
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`PORT listening to 5000`);
});
