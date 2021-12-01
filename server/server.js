const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// specify your middleware here
app.use(express());
app.use(cors());

// specify your routes here
const shipwreckRoute = require("./routes/shipwrecks/shipwreckRoute");

app.use("/geospatial", shipwreckRoute);

console.log("Connecting to database. Put the kettle on while you wait... 🫖");

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database connected! 😍☕"))
  .catch((error) => console.log(error, "Database did not connect! ☹️❌"));

app.listen(3001, () => console.log("The server is listening... 🐒"));
