const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const usersRoute = require("./routes/usersRoute");
const artistsRoute = require("./routes/artistsRoute");
const songsRoute = require("./routes/songsRoute");

const app = express();
mongoose
  .connect(
    "mongodb+srv://amansrivastava101:" +
      process.env.MONGO_ATLAS_PASSWORD +
      "@soulmusic.2suhflq.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Failed");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use("/api/users", usersRoute);
app.use("/api/songs", songsRoute);
app.use("/api/artists", artistsRoute);

module.exports = app;
