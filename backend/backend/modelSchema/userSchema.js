const mongoose = require("../db/database");

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    role: { type: String,default:'student' },
    phone: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);

module.exports = user;
