const APIError = require("../utils/APIError");
const status = require("http-status");
const User = require("../models/User.model");

module.exports = (role) =>{ 

    return async (req, res, next) =>{
       
        // const user = await User.findOne({ where: { id: req.user.id } });
        
        if(role !== req.user.roleId){
            return next(new APIError('You dont have permission to excess this resource', status.FORBIDDEN));
        }
        next();
    }
}