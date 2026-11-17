import { AppError } from "./AppError.js";
import { logger } from "../logger/logger.js";
export function errorHandler(err, _req, res, _next) {
    //known errors
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }
    // Log unexpected/non-operational errors for debugging
    logger.error(err);
    //unknown errors
    return res
        .status(500)
        .json({ success: false, message: "internal server error" });
}
//# sourceMappingURL=errorHandler.js.map