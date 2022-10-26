import {ApiResponse} from './api-response';
// model
export class Provincias {

  codProv: string;
  provincia: string;


  constructor(codProv?: string, provincia?: string) {

    this.codProv = codProv || '';
    this.provincia = provincia || '';


  }
}
// responses
export class ResponseProvincia extends ApiResponse {
  data: Provincias;

  constructor(data: Provincias) {
    super(data);
  }
}
export class ResponseProvincias extends ApiResponse {
  data: Provincias[];

  constructor(data: Provincias[]) {
    super(data);
  }
}
