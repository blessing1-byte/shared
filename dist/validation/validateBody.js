import { AppError } from "../errors/AppError.js";
export function validateBody(schema) {
    return function (req, _res, next) {
        // you want to safe parse the direct dynamic request coming from the user against a static defined schema rule
        const result = schema.safeParse(req.body);
        if (!result.success) {
            //   throw an error but the error that comes is usually complicated and an object so, simplify by mapping through and join each value with a comma
            const message = result.error.issues
                .map((issue) => issue.message)
                .join(",");
            return next(new AppError(404, message));
        }
        req.body = result.data;
        next();
    };
}
//# sourceMappingURL=validateBody.js.map