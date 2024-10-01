const express = require('express');
const router = express.Router();
const UC = require('../controller/registerController');
// const LC = require('../controller/sudentLoginController');
const Login = require('../controller/loginController');

// router.get('/students',UC.showStudent);
// router.get('/alluser',UC.showall);
router.post('/register', UC.registration);
// router.post('/login',LC.loginStudent);
router.post('/loginuser',Login.login);

router.use('/', (req, res)=>{
    res.send(`<h2>The router is working fine</h2>`)
})

module.exports = router;