const User = require("../modelSchema/userSchema");
const bcrypt = require("bcrypt");
class UserController {
  // static showall = async (req, res) => {
  //   let result = await User.find({});
  //   res.status(200).json(result);
  // };

  // static showStudent = async (req, res) => {
  //   try {
  //     let result = await User.find({ role: "student" });

  //     return res.status(200).json({
  //       success: true,
  //       result,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     return res.status(500).json({
  //       success: false,
  //       message: "Something went wrong",
  //       error: err,
  //     });
  //   }
  // };

  static registration = async (req, res) => {
    try {
      const { name, phone, email, password } = req.body;
      const existEmail = await User.findOne({ email });
      if (existEmail) {
        res.status(404).json({ msg: "Email is already exist" });
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const userData = new User({
          name,
          phone,
          email,
          password: hashPassword,
        });
        let result = await userData.save();
        if (result) {
          res.status(200).json({ msg: "Registration done" });
        } else {
          res.status(404).json({ msg: "Registration failed" });
        }
      }
    } catch (err) {
      res.status(404).json({ msg: "Request cannot be made" });
    }
  };
}
module.exports = UserController;
