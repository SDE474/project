const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ ERROR: MONGO_URI is not defined. Check your .env file.");
  process.exit(1);
}

console.log("🔍 Attempting to connect to MongoDB...");

// Connect to MongoDB (without deprecated options)
mongoose
  .connect(mongoURI) // Removed deprecated options
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1);
  });

module.exports = mongoose;
