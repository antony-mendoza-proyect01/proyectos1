import {ApiResponse} from './api-response';
// model
export class Meteorizaciones {
  id?: number;
  codMeteorizacion: string;
  meteorizacion: string;


  constructor(codMeteorizacion?: string, meteorizacion?: string) {

    this.codMeteorizacion = codMeteorizacion || '';
    this.meteorizacion = meteorizacion || '';


  }
}
// responses
export class ResponseMeteorizacion extends ApiResponse {
  data: Meteorizaciones;

  constructor(data: Meteorizaciones) {
    super(data);
  }
}
export class ResponseMeteorizaciones extends ApiResponse {
  data: Meteorizaciones[];

  constructor(data: Meteorizaciones[]) {
    super(data);
  }
}
