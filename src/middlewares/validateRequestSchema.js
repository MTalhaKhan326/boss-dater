const { validationResult } = require('express-validator');
const APIError = require('../utils/APIError');

module.exports = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        next(new APIError(errors.errors[0].msg, 400));
    }

    next();
}