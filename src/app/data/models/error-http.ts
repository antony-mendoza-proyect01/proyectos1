export class ErrorHttp {
  description: string;
  message: string;
  statusCode: number;
  timestamp: string;


  constructor(description?: string, message?: string, statusCode?: number, timestamp?: string) {
    this.description = description || '';
    this.message = message || '';
    this.statusCode = statusCode || 0;
    this.timestamp = timestamp || '';
  }
}
