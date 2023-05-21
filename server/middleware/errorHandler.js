const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  const customError = {
    type: null,
    message: err.message || "Something went wrong",
    status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  //   Mongoose validation error
  if (err.name === "ValidationError") {
    customError.path = Object.values(err.errors).map((item) => item.path);
    customError.message = Object.values(err.errors).map((item) => item.message);
    customError.status = StatusCodes.BAD_REQUEST;

    console.log(customError);
  }

  //   Mongoose cast error
  if (err.name === "CastError") {
    customError.message = "The provided id does not exist.";
    customError.status = StatusCodes.BAD_REQUEST;
  }

  if (err.code && err.code === 11000) {
    customError.type = "email";
    customError.message = "The email is already exist.";
    customError.status = StatusCodes.BAD_REQUEST;
  }

  return res
    .status(customError.status)
    .json({ type: customError.type, message: customError.message });
  // return res.status(401).json(err);
};

module.exports = errorHandler;
