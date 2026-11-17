import { logger } from "../logger/logger.js";
const POLL_EVENT = 5000;
export async function pollOutbox(publish_fn) {
    while (true) {
        try {
            await publish_fn();
        }
        catch (error) {
            logger.error(error);
        }
        await new Promise((resolve) => {
            setTimeout(resolve, POLL_EVENT);
        });
    }
}
//# sourceMappingURL=eventOutbox.workers.js.map