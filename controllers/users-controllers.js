const HttpError = require("../models/http-error"); //Import custom error handler
const { validationResult } = require("express-validator"); //Import validation library
const User = require("../models/user"); // Import User model

//Function to retrieve list of all users
const getAllUsers = async (req, res, next) => {       
        let userInfo;
        try{
            userInfo = await User.find(); //Fetch all user records from MongoDB
        }catch(err){
            return next(new HttpError("Something went wrong, Could not retrieve all users.", 500));
        }

    //Return list of all users as JSON
    res.json({ users: userInfo.map(user => user.toObject({ getters: true }))});
};

//Function to create new user (sign up)
const createUser = async (req, res, next) => {
    //Validate request body fields 
    const errors = validationResult(req);

    //If validation fails, return a 400 error
    if(!errors.isEmpty()){
        console.log(errors);
        const error = new HttpError("Invalid Input, try again. Please enter correct data.", 400);
        return next(error);
    }

    //Destructure required fields from request body
    const { username, email, password, address, contactNumber } = req.body;

    //Create a new User instance with the provided data
    const newUser = new User({
        username, email, password, address, contactNumber
    }); 

    //Save the new user to MongoDB
    try{
        await newUser.save();
    }catch(err){
        const error = new HttpError("Creating user failed. Please try again later.", 500);
        return next(error);
    }

    //Return the created user as JSON with status 201 (Created)
    res.status(201).json({user: newUser.toObject({ getters : true })});
};

//Export controller functions for use in routes
exports.getAllUsers = getAllUsers;
exports.createUser = createUser;