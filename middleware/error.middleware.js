const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const errors = err.errors || [];
    const stack = err.stack;
  
    res.status(statusCode).json({
      error: {
        statusCode,
        message,
        errors,
        stack,
      },
    });
  };
  
  module.exports = { errorHandler };