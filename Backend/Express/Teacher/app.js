const express = require("express");
const app = express();
const productsRoute = require("./routes/products");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cors = require("cors");

app.use(cors("*"));
app.use(express.json());

mongoose
  .connect(process.env.DATABASE_SECRET)
  .then(() => console.log("Connection to db successful"))
  .catch((err) => console.log(err));
// app.post("/", (req, res) => {
//   console.log(req.headers);
// });

app.use("/products", productsRoute);
app.use("/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = { app };