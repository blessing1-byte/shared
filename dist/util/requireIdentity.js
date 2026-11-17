import { AppError } from "../errors/AppError.js";
export function requireIdentity(req) {
    const userId = req.header("x-userId");
    const role = req.header("x-role");
    if (!userId || !role) {
        throw new AppError(401, "missing user identity");
    }
    return {
        userId: userId,
        role: role,
    };
}
//# sourceMappingURL=requireIdentity.js.map