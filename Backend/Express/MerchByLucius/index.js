const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 6000;
const creatorRoute = require("./routes/creator")
const mongoose = require("mongoose");

mongoose.connect(process.env.NO_SRV)
    .then(()=>console.log("Server is connected to db"))
    .catch((e)=>console.log(e))

app.use(express.json());
app.use("/accounts", creatorRoute);

app.listen(port, ()=>console.log(`server running on port ${port}`))