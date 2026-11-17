import { IHeaders, Producer, RecordMetadata } from "kafkajs";
export declare function createProducer(clientId: string): Promise<Producer>;
export declare function publishJson(producer: Producer, headers: IHeaders | undefined, topic: string, payload: Record<string, any>, key?: string): Promise<RecordMetadata[]>;
export declare function publishJsonSafe(producer: Producer | null, payload: Record<string, any>, topic: string, headers?: IHeaders, key?: string): Promise<void>;
