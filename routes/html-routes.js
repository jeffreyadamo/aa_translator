const path = require("path");
const fs = require("fs");
const axios = require("axios");
const querystring = require("querystring");

module.exports = function (app) {
  // HTML routes
  app.get("/", (req, res) => 
        res.sendFile(
                path.join(__dirname, "../public/components/views/index.html")
    ));
}
