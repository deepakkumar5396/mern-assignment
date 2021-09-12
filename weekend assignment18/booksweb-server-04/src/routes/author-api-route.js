const express=require('express');
const {AuthorService}=require('../services/author-service');
const {handleRequest}=require('../utils/express-utils');




const getRouter= ()=>{

   const service=new AuthorService();


    let router=express.Router();

    router  
        .route("/")    
        .get(handleRequest(service.getAllAuthors))
        .post(handleRequest(service.addAuthor));

  //---> api/books/Authors
  

    //---->  api/books/5555
    router 
    .route('/:id')
    .get(handleRequest(service.getAuthorById))
    .put(handleRequest(service.updateAuthor))
    .delete(handleRequest(service.deleteAuthor));
  
  return router;


};


module.exports=getRouter;

