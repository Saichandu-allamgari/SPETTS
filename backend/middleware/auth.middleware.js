// middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    // Check token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided"
      });
    }

    // Remove Bearer if exists
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Save user data in req.user
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
};