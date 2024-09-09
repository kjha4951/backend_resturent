class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        // Capture stack trace
        Error.captureStackTrace(this, this.constructor);
    }
}

const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || 'Internal Server Error';
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

module.exports = { ErrorHandler, errorMiddleware };
