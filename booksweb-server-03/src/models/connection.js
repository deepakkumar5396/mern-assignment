require('dotenv').config();
const {DB_USER,DB_PASSWORD,DB_URL}=process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}/myFirstDatabase?retryWrites=true&w=majority`;
const mongoose = require('mongoose');


module.exports.connect= async()=>{
    await mongoose.connect(uri);
}