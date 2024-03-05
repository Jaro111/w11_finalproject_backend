require("dotenv").config();
const cors = require("cors");
const express = require("express");
const User = require("./users/model");

const port = process.env.PORT || 5001;

const app = express();
app.use(cors());

app.use(express.json());

const SyncTables = () => {
  User.sync();
};

app.listen(port, () => {
  SyncTables();
  console.log(`Server is listening on port ${port}`);
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API healthy" });
});
