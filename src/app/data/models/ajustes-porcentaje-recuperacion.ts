import {ApiResponse} from './api-response';
// model
export class ContratoPerforacionAjustesRecuperacion {
  codigo?: number;
  codContrato: string;
  tipoPozo: string;
  rinicial: number;
  rfinal: number;
  porcentaje: string;



  constructor(codigo?: number, codContrato?: string, tipoPozo?: string, rinicial?: number, rfinal?: number, porcentaje?: string) {
    this.codigo= codigo || null;
    this.codContrato = codContrato || '';
    this.tipoPozo = tipoPozo || '';
    this.rinicial = rinicial || null;
    this.rfinal = rfinal || null;
    this.porcentaje = porcentaje || '' ;

  }
}
// responses
export class ResponseContratoPerforacionAjustesRecuperacion extends ApiResponse {
  data: ContratoPerforacionAjustesRecuperacion;

  constructor(data: ContratoPerforacionAjustesRecuperacion) {
    super(data);
  }
}
export class ResponseContratoPerforacionAjustesRecuperaciones extends ApiResponse {
  data: ContratoPerforacionAjustesRecuperacion[];

  constructor(data: ContratoPerforacionAjustesRecuperacion[]) {
    super(data);
  }
}
