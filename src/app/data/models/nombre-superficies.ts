import {ApiResponse} from './api-response';
// model
export class NombreSuperficies {
  codigo:string;
  nombre: string;
  r: number;
  g: number;
  b: number;



  constructor(nombre?: string, r?: number,  g?: number,  b?: number,  codigo?:string) {
    this.codigo = codigo || '';
    this.nombre = nombre || '';
    this.r = r || 255;
    this.r = g || 255;
    this.r = b || 255;



  }
}
// responses
export class ResponseNombreSuperficie extends ApiResponse {
  data: NombreSuperficies;

  constructor(data: NombreSuperficies) {
    super(data);
  }
}
export class ResponseNombreSuperficies extends ApiResponse {
  data: NombreSuperficies[];

  constructor(data: NombreSuperficies[]) {
    super(data);
  }
}
