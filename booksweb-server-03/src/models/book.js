const mongoose = require('mongoose');

const books = mongoose.Schema({
   
    title: String,
    isbn:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    description:String,
    tags:{
        type:Array,
        required:false
    }
});

const BookModel= mongoose.model('books', books);

module.exports={
    BookModel
}