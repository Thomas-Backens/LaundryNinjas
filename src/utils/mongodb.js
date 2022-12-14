const { MongoClient } = require("mongodb");
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());

const uri =
  "mongodb+srv://laundryninjas:Moneymaker2022@maincluster.ymjwmza.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((e) => console.log(e));

// require("./userDetails");
// const User = mongoose.model("UserInfo");

// app.post("./register", async (req, res) => {
//   const { name, email, number, address, password } = req.body;
//   try {
//     await User.create({
//       name,
//       email,
//       number,
//       address,
//       password,
//     });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.send({ status: "error" });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server Started");
// });

const getAllUsers = async () => {
  const client = new MongoClient(uri);
  let result = {};

  try {
    await client.connect();

    result = client
      .db("AllUsers")
      .collection("Users")
      .findOne({ name: "John Doe" });
    console.log("???");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
  return result;
};

const registerUser = async (newUser) => {
  const client = new MongoClient(uri);
  let result = {};

  try {
    await client.connect();

    const registeredUser = client
      .db("AllUsers")
      .collection("Users")
      .insertOne(newUser);

    result = await registeredUser;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
  return result;
};

// registerUser({
//   name: "John Doe",
//   email: "john@doe.com",
//   number: "4029997777",
//   address: "12345 wierd st",
//   password: "12345Password",
// }).catch(console.error);

module.exports = {
  getAllUsers,
  registerUser,
};
