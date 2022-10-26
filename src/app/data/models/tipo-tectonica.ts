import {ApiResponse} from './api-response';
// model
export class TipoTectonicas {

  codTecTipo: string;
  tipo: string;


  constructor(codTecTipo?: string, tipo?: string) {

    this.codTecTipo = codTecTipo || '';
    this.tipo = tipo || '';


  }
}
// responses
export class ResponseTipoTectonica extends ApiResponse {
  data: TipoTectonicas;

  constructor(data: TipoTectonicas) {
    super(data);
  }
}
export class ResponseTipoTectonicas extends ApiResponse {
  data: TipoTectonicas[];

  constructor(data: TipoTectonicas[]) {
    super(data);
  }
}
