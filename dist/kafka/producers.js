import { logger } from "../logger/logger.js";
import { createKafkaClient } from "./topics.js";
//this creates the producer and also publishes the event to kafka
//configure the producer set up using the client id
export async function createProducer(clientId) {
    const kafka = createKafkaClient(clientId);
    const producer = kafka.producer();
    await producer.connect();
    logger.info({ clientId }, "KAFKA PRODUCER SUCCESSFUL");
    return producer;
}
export async function publishJson(producer, topic, headers = {}, payload, key) {
    const result = await producer.send({
        topic,
        messages: [
            {
                headers,
                key: key ?? null,
                value: JSON.stringify(payload),
            },
        ],
    });
    logger.info({ topic, payload }, "kafka event published successfully");
    console.log(result);
    return result;
}
export async function publishJsonSafe(producer, topic, headers = {}, payload, key) {
    if (!producer) {
        logger.warn("producer is not ready");
        return;
    }
    try {
        await publishJson(producer, topic, headers, payload, key);
    }
    catch (error) {
        logger.error({ error, topic, payload }, " failed to publish event safely");
    }
}
//# sourceMappingURL=producers.js.map