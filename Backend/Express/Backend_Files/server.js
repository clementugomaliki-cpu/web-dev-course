const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const mongoose = require("mongoose")
require("dotenv").config();
const usersRoute = require("./routes/users");
const orderRoute = require("./routes/order");
const messageRoute = require("./routes/chat");
const productsRoute = require("./routes/products");
const cartRoute = require("./routes/cart");


mongoose.connect(process.env.NO_SRV)
    .then(()=>console.log("Server connected to database"))
    .catch((e) => console.log("failed to connect", e));

app.use(express.json());
app.use(cors());
app.use("/users", usersRoute);
app.use("/orders", orderRoute);
app.use("/messages", messageRoute);
app.use("/products", productsRoute);
app.use("/cart", cartRoute);

app.listen(port, ()=>console.log(`Server running on port ${port}`))
