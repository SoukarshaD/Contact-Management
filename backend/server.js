const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//CORS
app.use(cors());

// Body parser
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));

//Test Route
app.get("/", (req, res) => {
  res.send("Contact Manager API is running");
});

// Database and servers
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });