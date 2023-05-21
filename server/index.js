require("express-async-errors");
require("dotenv").config();

const cors = require("cors");
const connectDB = require("./db/connect");

const express = require("express");
const app = express();

const userRouter = require("./routes/user");
const errorHandler = require("./middleware/errorHandler");
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("../client/build"));

// Home route
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/v1/users", userRouter);

app.use(errorHandler);
// App start
const port = process.env.PORT || 5000;
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("connected to database");

  app.listen(port, () => console.log(`Server is listening on port ${port}`));
};

start();
