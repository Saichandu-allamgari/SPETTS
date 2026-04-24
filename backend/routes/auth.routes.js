// routes/authRoutes.js

const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getProfile
} = require("../controller/auth.controller");

const authMiddleware = require("../middleware/auth.middleware");

/* ===============================
   PUBLIC ROUTES
================================= */

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

/* ===============================
   PROTECTED ROUTES
================================= */

// Get Logged-in User Profile
router.get("/profile", authMiddleware, getProfile);

module.exports = router;