import { logger } from "../logger/logger.js";

const POLL_EVENT = 5000;
export async function pollOutbox(publish_fn: () => Promise<void>) {
  while (true) {
    try {
      await publish_fn();
    } catch (error) {
      logger.error(error);
    }

    await new Promise((resolve) => {
      setTimeout(resolve, POLL_EVENT);
    });
  }
}
