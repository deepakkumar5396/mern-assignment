const express=require('express');
const userService=require('../services/user-service');
const {handleRequest}=require('../utils/express-utils');


const getRouter=()=>{

    let router=express.Router();

    router
        .route("/")
        .get(handleRequest(userService.getAllUsers))
        .post(handleRequest(userService.register));


    return router;
}

module.exports=getRouter;
