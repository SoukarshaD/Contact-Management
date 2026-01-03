const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS FIX
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));

// Test route
app.get("/", (req, res) => {
    res.send("Contact Manager API is running");
});

// Database connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(5000, () =>
            console.log("Server running on port 5000")
        );
    })
    .catch((err) => console.log(err));