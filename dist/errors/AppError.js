export class AppError extends Error {
    statusCode;
    isOperational;
    constructor(statusCode, message, isOperational = true) {
        super(message);
        this.name = "AppError";
        this.statusCode = statusCode;
        this.isOperational = isOperational;
    }
}
//statuscode, message, isOperational
//defined as a class in order to create instances and extend the main error class
//# sourceMappingURL=AppError.js.map