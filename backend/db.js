const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm")

const UserSchema= new mongoose.schema({
    username : String,
    password : String,
    firstName : String,
    latsName : String
})

const User = mongoose.schema('User',UserSchema)

module.exports={
    User
}