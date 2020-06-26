// Import libraaries required.
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// Connect to DB
mongoose.connect(process.env.CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
// Get connection object.
const dbConnection = mongoose.connection;
// Set up success or failure message.
dbConnection.on("error", console.error.bind(console, "connection error:"));
dbConnection.once("open", function () {
  console.log("Successfully connected to mongodb colection Job Seeker");
});

// Import the module.
module.exports = dbConnection;
