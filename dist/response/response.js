//res, statuscode, data
//success response shape
export function successResponse(res, statusCode = 200, data) {
    return res.status(statusCode).json({ success: true, data });
}
//failed response shape
export function failResponse(res, message, statusCode = 400) {
    return res.status(statusCode).json({
        success: false,
        message,
    });
}
//# sourceMappingURL=response.js.map