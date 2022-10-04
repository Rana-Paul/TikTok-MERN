require("dotenv").config();
const mongoose = require("mongoose");

const db_url = process.env.db_url;
mongoose
  .connect(db_url, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
