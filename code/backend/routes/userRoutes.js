const express = require("express");
const { generateAccessToken, authenticateToken } = require("../auth/jwt");
const User = require("../models/User");

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /devices.
const router = express.Router();

// signup user
router.post("/signup", (req, res) => {
  let newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password, // TODO: encrypt password
    email: req.body.email,
  };

  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      res.status(400).send("User already exists!");
    } else {
      User.create(newUser, function (err, user) {
        if (err) {
          console.log(err);
          res.status(400).send("Error creating user!");
        } else {
          const token = generateAccessToken({ user_id: user._id });
          user = { ...user._doc, token: token };
          res.status(201).json(user);
        }
      });
    }
  });
});

// login user
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err || !user) {
      res.status(400).send("Incorrect credentials!");
    } else {
      // TODO: use hashing and encryption
      if (user.password === req.body.password) {
        const token = generateAccessToken({ user_id: user._id });
        user = { ...user._doc, token: token };
        res.json(user);
      } else {
        res.status(400).send("Incorrect credentials!");
      }
    }
  });
});

// update user details
router.put("/me", authenticateToken, (req, res) => {
  User.findByIdAndUpdate(
    req.user.user_id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
    },
    { new: true },
    function (err, user) {
      if (err) {
        console.log(err);
        res.status(400).send("Error updating user!");
      } else {
        res.json(user);
      }
    }
  );
});

module.exports = router;
