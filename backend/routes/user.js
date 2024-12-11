const express = require("express");
const router = express.Router();
const User = require("../models/User");

// API: Lấy danh sách người dùng
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users: " + err.message });
  }
});

// API: Thêm người dùng
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    const newUser = new User({ name, email, phone, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully.", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Error adding user: " + err.message });
  }
});

// API: Sửa thông tin người dùng
router.put("/:id", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Error updating user: " + err.message });
  }
});

// API: Xóa người dùng
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user: " + err.message });
  }
});


router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid password." });
      }
  
      res.status(200).json({ message: "Login successful!", user });
    } catch (err) {
      res.status(500).json({ message: "Error logging in: " + err.message });
    }
  });

module.exports = router;
