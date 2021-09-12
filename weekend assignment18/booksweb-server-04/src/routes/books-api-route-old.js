const express=require('express');
const {BookController}=require('../controllers//book-controller');


const getRouter= ()=>{

   const bookController=new BookController();
    let router=express.Router();
  //  console.log(router);
    router  
        .route("/")     
       // .get((request,response)=>bookController.getAllBooks(request,response))
        .get(bookController.getAllBooks)
        .post(bookController.addBook);



  //--->  api/books/titles
  router.get('/titles', bookController.getBookTitles);

  //---> api/books/Authors
  router.get('/authors',bookController.getAllAuthors);
  

    //---->  api/books/5555
    router 
    .route('/:id')
    .get(bookController.getBookByIsbn)
    //.put(bookController.updateBook);
    //.delete(bookController.deleteBook);


 
  router.get('/by/:author',bookController.getBooksByAuthor);

  router.get('/search/term',bookController.search);
  
  
  return router;


};


module.exports=getRouter;

