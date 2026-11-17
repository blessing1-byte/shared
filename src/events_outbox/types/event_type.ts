export type Events = {
  id: string;
  topic: string;
  event_type: string;
  aggregate_id: string;
  payload: Record<string, any>;
  created_at: Date;
  published_at: Date | null;
};
