import { pinoHttp } from "pino-http";
import { logger } from "./logger.js";
export const httpLogger = pinoHttp({
    logger: logger,
});
//this helps to log http requests
//# sourceMappingURL=httpLogger.js.map