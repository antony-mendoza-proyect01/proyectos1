import {ApiResponse} from './api-response';
// model
export class Humedades {

  codHumedad: number;
  humedad: string;


  constructor(codHumedad?: number, humedad?: string) {

    this.codHumedad = codHumedad || null;
    this.humedad = humedad || '';


  }
}
// responses
export class ResponseHumedad extends ApiResponse {
  data: Humedades;

  constructor(data: Humedades) {
    super(data);
  }
}
export class ResponseHumedades extends ApiResponse {
  data: Humedades[];

  constructor(data: Humedades[]) {
    super(data);
  }
}
