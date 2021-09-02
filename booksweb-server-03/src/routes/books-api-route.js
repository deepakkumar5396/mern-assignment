const express=require('express');
const {BookModel} =require('../models/book');


const getRouter= ()=>{

   // console.log('setting up the routes');
    let router=express.Router();
  //  console.log(router);
    router  
        .route("/")     
        .get(async (request,response)=>{
            
            let books=await BookModel.find();
            response.json(books);

        })
        .post(async (request,response)=>{
            try{
                let bookData=request.body;
                let book= new BookModel(bookData);
                let result=await book.save();
                response.status(201).json(result);
            } catch(err){
                response.status(400).json({error:err, message:err.message});
            }
        });


    router
    .route('/:id')
    .get(async (request,response)=>{
        const {id}=request.params;

        let book=await  BookModel.findOne({isbn:id}); //find one book by the id
        if(book)
            response.json(book);
        else{
            response.status(404).json({error:'Invalid ISBN number', isbn:id});
        }
        
    })
    .put(async(request,response)=>{
        try{
            const {id}=request.params;
            book=request.body;
            let result=await BookModel.findOneAndUpdate({isbn:id},book);
            if(book)
                response.status(202).send(result);
            else
                response.status(404).json({error: 'Book not found',isbn:id});
        }catch(err){
            response.status(400).json({error:err,message:err.message});
        }
    })
    .delete(async(request,response)=>{
        
        try{
            const {id}=request.params;
            let book=await BookModel.findOneAndDelete({isbn:id});
            if(book)
                response.status(204).send('');
            else
                response.status(404).json({error: 'Book not found',isbn:id});
        }catch(err){
            response.status(400).json({error:err,message:err.message});
        }
    });

    return router;


};


module.exports=getRouter;

