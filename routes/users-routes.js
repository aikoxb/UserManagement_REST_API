//Import required libraries and controllers
const express = require("express");
const { check } = require("express-validator");
const usersControllers = require("../controllers/users-controllers");

//Initialize a new router object for defining user routes
const router = express.Router();

//Route to retrieve list of all users
router.get("/", usersControllers.getAllUsers);

//Route to create new user with validation checks
router.post("/signup"
    ,[
        check("username").notEmpty(),
        check("email").notEmpty().isEmail(),
        check("password").notEmpty(),
        check("address").notEmpty(),
        check("contactNumber").notEmpty().isLength({min:10})
    ],
    usersControllers.createUser);

//Export router for use in app.js
module.exports = router;