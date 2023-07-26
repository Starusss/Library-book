import mongooses from "mongoose";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";


import bookRouter from "./routers/book.js";
import authRouter from "./routers/authen.js";
import { render } from "ejs";


dotenv.config();

const app = express();

mongooses.connect(process.env.URL).then(() => {
  console.log("mongoo runing");
});

const db = mongooses.connection;

db.on("error", console.error.bind(console, "connection error"));

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("resources"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.use("/v1/auth", authRouter);

app.use("/v1/book", bookRouter);

app.use("/productDetails", (req, res) => {
  res.render("productDetails.ejs");
});

app.use("/addProduct", (req, res) => {
  res.render("addProduct.ejs");
});
app.use("/adminProduct", (req, res) => {
  res.render("adminProduct.ejs");
});
app.use("/updateProduct", (req, res) => {
  res.render("updateProduct.ejs");
});
app.use("/search", (req, res) => {
  res.render("search.ejs");
});

app.use("/test", (req, res) => {
  res.render("test.ejs");
});

app.post("/user/me", (req, res) =>{
  try {
    const check = jwt.verify(token, 'abc')
    if (check) {
      return res.json('succesfully')
    }
  } catch (error) {
    return res.json('can phai login')
  }
 
});



app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
