const User = require("../modelSchema/userSchema");
const bcrypt = require("bcrypt");
class loginController {
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      let foundUser = await User.findOne({ email });
      if (foundUser) {
        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch) {
          res.status(404).json({ msg: "Incorrect password" });
        } else {
          res.status(200).json({ msg: "Login Successful", _id: foundUser._id, role:foundUser.role });
        }
      } else {
        res.status(404).json({ msg: "Invalid email id" });
      }
    } catch (err) {
      res.status(404).json({ msg: "request cannot be made" });
    }
  };
}
module.exports = loginController;
