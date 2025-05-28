// server.js

// Load environment variables and validate them
require("dotenv").config();
const { cleanEnv, port, str } = require("envalid");

cleanEnv(process.env, {
  PORT: port({ default: 3000 }),
  SPOTIFY_CLIENT_ID: str(),
  SPOTIFY_CLIENT_SECRET: str(),
});

// Dependencies
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(compression());
app.use(
  helmet({
    contentSecurityPolicy: false, // Consider enabling with a proper policy
  })
);

// Routes
//require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down server...");
  server.close(() => {
    console.log("✅ Server closed.");
    process.exit(0);
  });
});
