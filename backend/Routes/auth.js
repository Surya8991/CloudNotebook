const express = require('express');
const User = require('../models/User');
const router = express.Router();
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../Middleware/fetchuser')
const bcrypt = require('bcrypt');

const JWT_SecretKey = "D3m0nK1nG"

//Route:1 Create a User using: POST "/api/auth/createuser". No login required localhost:5000/api/auth/createuser ThunderClient EndPoint
router.post('/createUser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Check whether the user with this email exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exist" })
    }
    // Create a new user
    let salt = await bcrypt.genSalt(10)
    let SecPassword = await bcrypt.hash(req.body.password, salt)
    user = await User.create({
      name: req.body.name,
      password: SecPassword,
      email: req.body.email,
    })
    let data = {
      user: user.id
    }
    let authToken = jwt.sign(data, JWT_SecretKey)
    res.json({ "AuthToken": authToken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error Occured");
  }
})

//Route:2 Authentication for Login using Credantials no user Required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').exists()
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email })
    // If email is wrong
    if (!user) {
      return res.json({ errors: "Please Login with Correct Credantials" })
    }
    // If password is wrong
    let passwordCompare = await bcrypt.compare(req.body.password, user.password)
    if (!passwordCompare) {
      return res.json({ errors: "Please Login with Correct Credantials" })
    }
    let data = {
      user: user.id
    }
    let authToken = jwt.sign(data, JWT_SecretKey)
    res.json({ "authToken": authToken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error Occured");
  }
})

// Route : Get Logged User data No Login Required
router.post('/getUser', fetchuser, async (req, res) => {
  try {
    // find the user Id
    let userId = req.user
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error Occured");
  }
})

module.exports = router