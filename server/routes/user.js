const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const router = express.Router();

router.route("/").post(createUser).get(getAllUsers);
router.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
