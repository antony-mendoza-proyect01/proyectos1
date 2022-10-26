import {ApiResponse} from './api-response';
// model
export class TipoPerforaciones {

  codTipoPerforacion: string;
  perforacion: string;


  constructor(codTipoPerforacion?: string, perforacion?: string) {

    this.codTipoPerforacion = codTipoPerforacion || '';
    this.perforacion = perforacion || '';


  }
}
// responses
export class ResponseTipoPerforacion extends ApiResponse {
  data: TipoPerforaciones;

  constructor(data: TipoPerforaciones) {
    super(data);
  }
}
export class ResponseTipoPerforaciones extends ApiResponse {
  data: TipoPerforaciones[];

  constructor(data: TipoPerforaciones[]) {
    super(data);
  }
}
