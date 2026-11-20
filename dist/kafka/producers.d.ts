import { IHeaders, Producer, RecordMetadata } from "kafkajs";
export declare function createProducer(clientId: string): Promise<Producer>;
export declare function publishJson(producer: Producer, topic: string, headers: IHeaders | undefined, payload: Record<string, any>, key?: string): Promise<RecordMetadata[]>;
export declare function publishJsonSafe(producer: Producer | null, topic: string, headers: IHeaders | undefined, payload: Record<string, any>, key?: string): Promise<void>;
