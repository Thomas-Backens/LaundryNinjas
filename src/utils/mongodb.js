// const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const uri =
  "mongodb+srv://laundryninjas:Moneymaker2022@maincluster.ymjwmza.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.listen(3000, () => {
  console.log("Server Started");
});
