import {ApiResponse} from './api-response';
// model
export class Municipios {

  codigo: number;
  municipio: string;


  constructor(codigo?: number, municipio?: string) {

    this.codigo = codigo || null;
    this.municipio = municipio || '';


  }
}
// responses
export class ResponseMunicipio extends ApiResponse {
  data: Municipios;

  constructor(data: Municipios) {
    super(data);
  }
}
export class ResponseMunicipios extends ApiResponse {
  data: Municipios[];

  constructor(data: Municipios[]) {
    super(data);
  }
}
