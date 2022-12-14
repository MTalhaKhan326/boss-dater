const { loggers } = require("winston");

class APIError extends Error {
    
    constructor(message, statusCode) {
        super(message)
        this.message = message;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        this.statusCode = statusCode;    
        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = APIError