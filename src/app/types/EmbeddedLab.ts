export interface EmbeddedLabItem {
  doorID: string;
  name?: string;
  status: 'open' | 'close';
  action: 'wait' | 'ring' | 'dismiss';
}

export interface EmbeddedLabTransaction {
  doorID: string;
  name?: string;
  status: 'open' | 'close';
  action: 'wait' | 'ring' | 'dismiss';
  createdAt: Date | string;
  from: string;
}
