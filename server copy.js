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
const http = require('http');
const reload = require('reload');
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
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-eval'"],
      connectSrc: ["'self'", "ws:"], // allow WebSocket connections for reload
    }
  })
);


// Routes
//require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


// Create the HTTP server
const server = http.createServer(app);

// loggin to confirm file watching is working

const fs = require('fs');

fs.watch(path.join(__dirname, 'public'), { recursive: true }, (eventType, filename) => {
  console.log(`🔄 File changed: ${filename}`);
});



// Start server
/* const server = app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
}); */ 

// Attach reload and watch the 'public/components/views' folder

// Attach reload to the HTTP server
reload(server, {
  watchDir: path.join(__dirname, 'public')
}).then(() => {
    server.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  }).catch(err => {
    console.error('Reload could not start:', err);
  });



// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down server...");
  server.close(() => {
    console.log("✅ Server closed.");
    process.exit(0);
  });
});
