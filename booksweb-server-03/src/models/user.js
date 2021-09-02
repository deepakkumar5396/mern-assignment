const mongoose = require('mongoose');

const user = mongoose.Schema({
   
    name: String,
    email:String,
    moble:Number,
    aadhar:Number,
 
});

const UserModel= mongoose.model('user', user);

module.exports={
    UserModel
}