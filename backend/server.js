// // server.js

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ DB Error:", err));

// // Test Route
// app.get("/", (req, res) => {
//   res.send("🚑 SPETTS Backend Running");
// });

// // Server Start
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Import Routes
// const authRoutes = require("./routes/auth.routes");

// // Routes
// app.use("/api/auth", authRoutes);

// // MongoDB
// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log(err));

// // Test Route
// app.get("/", (req, res) => {
//   res.send("Backend Running");
// });

// // Server
// app.listen(5000, () => {
//   console.log("Server Started");
// });


// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

/* ===============================
   MIDDLEWARE
================================= */

// Enable CORS
app.use(cors());

// Read JSON Body
app.use(express.json());

// Read URL Encoded Data
app.use(express.urlencoded({ extended: true }));

/* ===============================
   ROUTES
================================= */

const authRoutes = require("./routes/auth.routes");

// Auth Routes
app.use("/api/auth", authRoutes);

/* ===============================
   TEST ROUTE
================================= */

app.get("/", (req, res) => {
  res.send("🚑 SPETTS Backend Running");
});

/* ===============================
   DATABASE CONNECTION
================================= */

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    console.log("✅ MongoDB Connected")
  )
  .catch((error) =>
    console.log("❌ DB Error:", error)
  );

/* ===============================
   SERVER START
================================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});