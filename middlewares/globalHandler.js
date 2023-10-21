const globalHandler = (err, req, res, next) => {
  //Status: failed/serverError
  //message:/
  //stack

  const stack = err.stack;
  const message = err.message;
  const status = err.status ? err.status : "Failed";
  const statusCode = err.statusCode ? err.statusCode : 500;
  res.status(statusCode).json({
    message,
    status,
    stack,
  });
};
module.exports = globalHandler;
