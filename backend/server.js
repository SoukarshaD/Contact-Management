const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//DYNAMIC CORS
app.use(cors({
  origin: (origin, callback) => {
    // allow server-to-server & tools like curl/postman
    if (!origin) return callback(null, true);

    // allow localhost
    if (origin.startsWith("http://localhost")) {
      return callback(null, true);
    }

    // allow ALL vercel subdomains
    if (origin.endsWith(".vercel.app")) {
      return callback(null, true);
    }

    // block everything else
    return callback(new Error("CORS not allowed"), false);
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

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