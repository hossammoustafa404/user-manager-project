const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be provided."],
      trim: true,
      max: 20,
    },
    email: {
      type: String,
      required: [true, "Email must be provided."],
      trim: true,
      // match: //
      max: 40,
      unique: true,
    },
    gender: {
      type: String,
      required: [true, "Gender must be provided."],

      enum: {
        values: ["male", "female"],
        message: "The provided gender must be only male or female",
      },
    },
    status: {
      type: String,
      default: "inactive",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
