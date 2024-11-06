//Import Mongoose for MongoDB interaction
const mongoose = require("mongoose");

//Access the Schema constructor from Mongoose for defining data structure
const Schema = mongoose.Schema;

//Define schema for User model
const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true }
});

//Export the User model for use in controllers
module.exports = mongoose.model('User', userSchema);