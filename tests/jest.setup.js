const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
    path : path.resolve(__dirname, "../.env"),
});

module.exports = {
  testTimeout: 30000,
  maxConcurrency: 1,
};
