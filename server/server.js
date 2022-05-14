const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items')

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = process.env.MONGO_URI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

  app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));