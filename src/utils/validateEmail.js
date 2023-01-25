const APIError = require("../utils/APIError");
const status = require('http-status');

exports.validateEmail = (emailAdress) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
        return true;
    } else {
        return false;
    }
}

exports.checkAccountDeletion = (user, next) => {
    if(user.deletedAt != null){
        return next(new APIError('Account is DELETED',status.FORBIDDEN));
    }
    // else if (!user.isActive){
    //     return next(new APIError('Account is DISABLED',status.FORBIDDEN));
    // }
    else{
        return true;
    };
}