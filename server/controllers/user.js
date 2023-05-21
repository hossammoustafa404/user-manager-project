const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

// Create user
const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

// Get all users
const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ nbhits: users.length, users });
};

// Get user
const getUser = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findOne({ _id: userId });

  res.status(StatusCodes.OK).json({ user });
};

// Update user
const updateUser = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ user });
};

// Delete user
const deleteUser = async (req, res) => {
  const { userId } = req.params;

  await User.findOneAndDelete({ _id: userId });

  res.status(StatusCodes.OK).send();

};

module.exports = { createUser, getAllUsers, getUser, updateUser,deleteUser };
