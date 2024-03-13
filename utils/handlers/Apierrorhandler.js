// apiError.js

/**
 * Custom error class for handling API errors. Extends the native Error class.
 * @class ApiError
 * @extends Error
 *
 * @param {number} statusCode - HTTP status code associated with the error.
 * @param {string} [message="Something went wrong"] - Error message (default is a generic message).
 * @param {Array} [errors=[]] - Array containing specific error details or additional information.
 * @param {string} [stack=""] - Stack trace for the error (optional, defaults to an empty string).
 */
class ApiError extends Error {
    constructor(
      statusCode,
      message = "Something went wrong",
      errors = [],
      stack = ""
    ) {
      // Call the constructor of the parent class (Error)
      super(message);
  
      // Custom properties for API error handling
      this.statusCode = statusCode;
      this.data = null; // Additional data associated with the error (initially set to null).
      this.message = message;
      this.success = false; // Indicates the failure nature of the API request.
      this.errors = errors; // Specific error details or additional information.
  
      // Set the stack trace if provided; otherwise, capture the current stack trace.
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  // Export the ApiError class for use in other modules.
  module.exports = ApiError;
  