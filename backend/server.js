const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://contact-management-green.vercel.app" 
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

// Body parser
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("Contact Manager API is running");
});

// Config
const PORT = process.env.PORT || 5000;

// DB and server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  });