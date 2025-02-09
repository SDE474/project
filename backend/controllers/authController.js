const User = require("../models/User"); // Ensure this path is correct
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// 🔹 Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// 🔹 Register User
exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ error: "Username already taken" });

    // Create user (password is hashed automatically by pre-save hook)
    const user = await User.create({ username, password, role });

    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 🔹 Login User
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    // Compare passwords
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    res.json({
      message: "Login successful",
      token: generateToken(user._id),
      user: { id: user._id, username: user.username, role: user.role },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
