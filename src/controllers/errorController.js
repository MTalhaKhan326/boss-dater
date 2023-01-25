const status = require('http-status')
const APIError = require('../utils/APIError')

const sendErrorDev = (err, res)=>{
  res.status(err.statusCode).json({
    status: err.status,
    error:err,
    message: err.message,
    stack: err.stack
  });
}

const sendErrorProd = (err, res)=>{

  // Operation, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });

    // programming or other unknown error: don't leak error details
  } else {
    // 1) Log Error
    logger.error(`ERROR *`, err);

    // 2) Send Generic Message
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    })
  }
  
}

const handleSequelizeUniqueConstraintError = (err) => {
  return new APIError({...err}.errors[0].message, status.BAD_REQUEST);
}

const handleSequalizeValidatinError = (err) => {
  const errMsgs = {...err}.errors.map((error) => error.message)
  return new APIError(errMsgs[0], status.BAD_REQUEST)
}


module.exports = (err, req, res, next)=>{

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    
    if(process.env.NODE_ENV === 'development')
    {
      
      if(err.name === 'SequelizeUniqueConstraintError')
      {
        err = handleSequelizeUniqueConstraintError(err);
      }
      else if (err.name === 'SequelizeValidationError')
      {
        err = handleSequalizeValidatinError(err);
      }

      sendErrorDev(err, res);
        
    }
      

    else if(process.env.NODE_ENV === 'production')
    {
      let error = {...err};
        sendErrorProd(err,res);
    }
      
    
  }