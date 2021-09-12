const mongoose = require('mongoose');


const authors = mongoose.Schema({

    name: {
        type:String,
        required:true

    },   
    id:{
       type: String,
       require:true
    },
    photo:String,
    biography:String

},{
   // collection: 'books'  //--> if our collection name is different from assumed collection name based on Model name
});

//Mongoose by default assumes that collection name will be lower case plural of model name supplied
// Book --> books
const Author= mongoose.model('Author', authors);

module.exports={
    Author
}