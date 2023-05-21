require("express-async-errors");
require("dotenv").config();
const path = require("path");

const cors = require("cors");
const connectDB = require("./db/connect");

const express = require("express");
const app = express();

const userRouter = require("./routes/user");
const errorHandler = require("./middleware/errorHandler");
// Middlewares
app.use(cors());
app.use(express.json());

// Home route
app.use("/api/v1/users", userRouter);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use(errorHandler);
// App start
const port = process.env.PORT || 5000;
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("connected to database");

  app.listen(port, () => console.log(`Server is listening on port ${port}`));
};

start();
