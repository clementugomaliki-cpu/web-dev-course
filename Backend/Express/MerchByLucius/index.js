const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 6000;
const creatorRoute = require("./routes/creator");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MBL_NO_SRV)
    .then(()=>console.log("Server is connected to db"))
    .catch((e)=>console.log(e))

app.use(express.json());
app.use(cors({
    origin: ["https://merchby-lucius.vercel.app", "http://localhost:5173"],
    credentials: true
}));
app.use("/accounts", creatorRoute);

app.listen(port, ()=>console.log(`server running on port ${port}`))