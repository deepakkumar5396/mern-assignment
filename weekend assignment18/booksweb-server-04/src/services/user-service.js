const { User } = require('../models/user');
const { ServiceError } = require('../utils/service-error');
require('dotenv').config();
const bcrypt = require('bcrypt');

const {PASSWORD_SECRET}=process.env;
console.log(PASSWORD_SECRET);

const register = async ({ body }) => {

    try {
        console.log('body',body);
        
        let user = await User.findOne({ email: body.email });
        if (user) {
            throw new ServiceError(400, "duplicate email id");
        }
        const salt=await bcrypt.genSalt(10);
        const password= await bcrypt.hash(body.password, salt);
        
        let newUser = new User({ ...body,password });
        let result=await  newUser.save();
        console.log('user added');
        return result;
    } catch (error) {
        console.log('error',error);
        throw new ServiceError(400, 'Validation Error', error);
    }
}

const getAllUsers=async ()=>{
    return await User.find();
}



module.exports={
    register,    
    getAllUsers
};