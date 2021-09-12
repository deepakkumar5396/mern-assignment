const {configureExpress}=require('./src/app');
const {connect} =require('./src/models/connection');
require('dotenv').config();

//IIFE ---> Immediately invokable function expression



(async function start(){

    try{
        const app=configureExpress(__dirname);

        console.log('connecting to the database...');
        //connect to mongodb
        await connect();
    
        console.log('connected') ;
        
        const port=process.env.PORT || 80;
        console.log(`starting the server on port ${port}...`);
        
        const server = app.listen(port,()=>console.log(`server started: http://localhost:${port}/`));
        
        server.on('error',(error)=>console.log(`server error: ${error}`));

    }catch(err){
        console.log('error',err.message);  
    }

  

})();


