const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const getBookRouter=require('./routes/books-api-route');
const getOldBookRouter=require('./routes/books-api-route-old');
const getUserRouter= require('./routes/user-route');
const getAuthorRouter=require('./routes/author-api-route');
const cors=require('cors');

function configureExpress(basePath){
    const app=express();   
    app.use(bodyParser.json());
    app.use(express.static(path.join(basePath, 'public')));  
    app.use(cors()); //allow cross origin request
    //console.log(getBookRouter);
  //  console.log(getAuthorRouter);
    
    app.use('/api/v1/books', getOldBookRouter());
    app.use('/api/books', getBookRouter());
    app.use('/api/authors', getAuthorRouter());
    app.use('/api/users',getUserRouter());

    return app; 
};

module.exports={
    configureExpress
};