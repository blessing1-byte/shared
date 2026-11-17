import { Consumer, EachMessagePayload } from "kafkajs";
export declare function createConsumer(clientId: string, groupId: string): Promise<Consumer>;
export declare function runConsumer(consumer: Consumer, topics: string[], handler: (payload: EachMessagePayload) => Promise<void>, //handler is a callback to run consumer after subscribing
options?: {
    fromBeginning?: boolean;
}): Promise<void>;
