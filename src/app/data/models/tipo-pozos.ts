import {ApiResponse} from './api-response';
// model
export class TipoPozos {
  id?: number;
  codigo: string;
  tipoPozo: string;


  constructor(codigo?: string, tipoPozo?: string) {

    this.codigo = codigo || '';
    this.tipoPozo = tipoPozo || '';


  }
}
// responses
export class ResponseTipopozo extends ApiResponse {
  data: TipoPozos;

  constructor(data: TipoPozos) {
    super(data);
  }
}
export class ResponseTipopozos extends ApiResponse {
  data: TipoPozos[];

  constructor(data: TipoPozos[]) {
    super(data);
  }
}
