//Import required libraries
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/users-routes"); //Import Users routes
const HttpError = require("./models/http-error"); //Import custom error handler

//Create an Express object
const app = express();

//Middleware to parse incoming JSON requests
app.use(bodyParser.json());

//Route to handle all user endpoints
app.use("/api/users", usersRoutes);

//Handle undefined routes with a 404 error
app.use((req, res, next) => {
    throw new HttpError("The requested URL was not found on this server.", 404);
});

//Error-handling middleware to manage errors
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }

    res.status(error.code || 500);
    res.json({message: error.message} || "An unknown error occured!");
});

//Connect to MongoDB
mongoose
    .connect("mongodb+srv://abislig:XF6oIS6rMdxlnGNk@cluster0.ktwsp.mongodb.net/user-management?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        app.listen(8080);
    })
    .catch(err => {
        console.log(err);
});