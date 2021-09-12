

class ServiceError extends Error {

    constructor(status, message, params){
        super(message);
        this.status=status;
        this.details={...params,status, message};
    }
}

module.exports={ServiceError};