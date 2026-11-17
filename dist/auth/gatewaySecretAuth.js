import { config } from "dotenv";
import { resolve } from "node:path";
config({ path: resolve(process.cwd(), "../../../../.env") });
export function verifyGatewaySecret(req, res, next) {
    const expectedSecret = process.env.GATEWAY_SECRET;
    if (!expectedSecret) {
        return next(new Error("gateway secret was not set"));
    }
    const incomingSecret = req.header("x-gateway-secret");
    if (!incomingSecret || incomingSecret !== expectedSecret) {
        return next(new Error("forbidden"));
    }
    next();
}
//# sourceMappingURL=gatewaySecretAuth.js.map