export declare class AppError extends Error {
    readonly statusCode: number;
    readonly isOperational: Boolean;
    constructor(statusCode: number, message: string, isOperational?: boolean);
}
