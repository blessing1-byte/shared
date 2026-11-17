import { Consumer, EachMessagePayload } from "kafkajs";
import { createKafkaClient } from "./topics.js";
import { logger } from "../logger/logger.js";

export async function createConsumer(
  clientId: string,
  groupId: string,
): Promise<Consumer> {
  //create client
  const kafka = createKafkaClient(clientId);

  const consumer = kafka.consumer({ groupId });

  await consumer.connect();

  logger.info({ groupId }, "kafka consumer connected successfully");

  consumer.on("consumer.connect", () => {
    logger.info("Consumer connected");
  });

  consumer.on("consumer.group_join", (event) => {
    logger.info({ event }, "Consumer joined group");
  });

  consumer.on("consumer.disconnect", () => {
    logger.warn("Consumer disconnected");
  });

  consumer.on("consumer.crash", (event) => {
    logger.error({ event }, "Consumer crashed");
  });

  return consumer;
}

//consumer subscribes to a topic, it has additional options to subscribe from the beginning or not

export async function runConsumer(
  consumer: Consumer,
  topics: string[],
  handler: (payload: EachMessagePayload) => Promise<void>, //handler is a callback to run consumer after subscribing
  options?: { fromBeginning?: boolean }, //destructuring additional options to extract from beginning
) {
  // subscribe to the topic
  await consumer.subscribe({
    topics,
    fromBeginning: options?.fromBeginning ?? false,
  });

  logger.info({ topics }, "consumer subscribed successfully");

  //run consumer
  await consumer.run({
    eachMessage: async (payload) => {
      //destructure incoming event
      const { topic, partition, message } = payload;

      logger.info(
        {
          topic,
          partition,
          offset: message.offset.toString(),
          key: message.key?.toString(),
        },
        "kafka message received successfully",
      );

      await handler(payload);
    },
  });
  // extract payload and necessary messages
  //await handler that handles the payload
}
