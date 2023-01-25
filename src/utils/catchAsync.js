module.exports = fn =>{
    return (req, res, next) => {
      fn(req, res, next).catch(next);
    }
}

  // Same as above
  // const catchAsync = (fn) => (req, res, next) => {
  //   Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  // };