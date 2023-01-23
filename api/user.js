const mongoQuery = require("../utils/mongodb");

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        console.log("am I even here?");
        const users = await mongoQuery.getAllUsers();
        res.status(200).json({ users });
        break;
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    case "POST":
      try {
        const { name, email, number, address, password } = await req.body;
        if (name && email && number && address && password) {
          const result = await mongoQuery.registerUser({
            name,
            email,
            number,
            address,
            password,
          });
          console.log(result);
          return res.json(result[0]);
        }
        throw new Error("All fields required");
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }

    default:
      return res.status(405).send("Method Not Allowed");
  }
};
