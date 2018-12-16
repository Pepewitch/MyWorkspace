export interface EmbeddedLabItem {
  doorID: string;
  name?: string;
  status: 'open' | 'close';
  action: 'wait' | 'ring' | 'dismiss';
}
