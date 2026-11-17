import { Kafka, type KafkaConfig } from "kafkajs";
export declare const TOPICS: {
    TICKET_EVENTS: string;
    USER_EVENTS: string;
};
export declare function createKafkaClient(clientId: string, config?: Partial<KafkaConfig>): Kafka;
