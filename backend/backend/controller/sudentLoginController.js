const User = require('../modelSchema/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config(); 

class StudentLogin {
    static loginStudent = async (req, res) => {
        try {
            const { role, email, password } = req.body;

            
            if (!email || !password) {
                return res.status(400).send({
                    success: false,
                    message: "Please fill the required fields"
                });
            }

          
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).send({
                    success: false,
                    message: "Please enter a valid email",
                });
            }

          
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).send({
                    success: false,
                    message: "Invalid password"
                });
            }

           
            if (user.role === 'student') {
                const token_secret = process.env.TOKEN_SECRET;
                const token = jwt.sign(
                    { email: user.email, role: user.role }, 
                    token_secret, 
                    { expiresIn: '1800s' } 
                );

                return res.status(200).send({
                    success: true,
                    message: "Student login successful",
                    token: token
                });
            } else if (user.role === 'teacher') {
                return res.status(200).json({
                    success: true,
                    message: "Teacher login successful",
                    role: user.role,
                    fullname: user.name
                });
            } else {
                return res.status(403).send({
                    success: false,
                    message: "Unauthorized role"
                });
            }

        } catch (error) {
            console.error(error);
            return res.status(500).send({
                success: false,
                message: "An error occurred during login"
            });
        }
    }
}

module.exports = StudentLogin;
