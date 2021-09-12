
class HttpResponse{
    constructor(data, status=200){
        this.data=data;
        this.status=status;
    }
}


function handleRequest( requestHandler ){

    return async (request,response)=>{

        try{

            let statusMap={
                get: 200,
                post:201,
                put:202,
                patch:202,
                delete:204
            }

            let data={
                body:request.body,
                ...request.params,  //add parameter like id
                ...request.query,   // add query like q
                request,            //in rare case you umay need 
                response            //direct access to request and response
            };
    
            const result=await requestHandler(data);

            let status= statusMap[request.method.toLocaleLowerCase()];
            response.status(status).json(result);

            // if(result.data && result.status){
            //     response.status(result.status).json(result.data);
            // } else{
            //     let status= statusMap[request.method.toLocaleLowerCase()];
            //     response.status(status).json(result);
            // }
            

        }catch(error){
            response.status(error.status).json(error.details);
        }

    };
}

module.exports={HttpResponse, handleRequest};