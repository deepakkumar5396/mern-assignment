const express=require('express');
const {UserModel} =require('../models/user');


const getRouter= ()=>{

   // console.log('setting up the routes');
    let router=express.Router();
  //  console.log(router);
    router  
        .route("/")     
        .get(async (request,response)=>{
            
            let user=await UserModel.find();
            response.json(user);

        })
        .post(async (request,response)=>{
            try{
                let userData=request.body;
                let user= new UserModel(userData);
                let result=await user.save();
                response.status(201).json(result);
            } catch(err){
                response.status(400).json({error:err, message:err.message});
            }
        });


    router
    .route('/:id')
    .get(async (request,response)=>{
        const {id}=request.params;

        let user=await  UserModel.findOne({aadhar:id}); //find one book by the id
        if(user)
            response.json(user);
        else{
            response.status(404).json({error:'Invalid Aadhar number', aadhar:id});
        }
        
    })
    
   

    return router;


};


module.exports=getRouter;

