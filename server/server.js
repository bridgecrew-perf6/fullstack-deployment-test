const express = require("express");
const cors = require("cors");
const path = require("path")
const mongoose = require("mongoose");
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require("config")

const app = express();

app.use(express.json());
app.use(cors());

const db = process.env.MONGO_URI || config.get('mongoURI');

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
