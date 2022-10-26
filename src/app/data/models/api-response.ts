export class ApiResponse {
  message: string;
  statusCode: number;
  valido: boolean;
  data: any;

  constructor(data: any, message?: string, valido?: boolean, statusCode?: number ) {
    this.message = message  || '';
    this.statusCode = statusCode || 0;
    this.valido = valido || false;
    this.data = data;
  }
}
