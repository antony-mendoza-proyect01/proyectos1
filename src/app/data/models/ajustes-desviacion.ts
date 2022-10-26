import {ApiResponse} from './api-response';
// model
export class ContratoPerforacionAjustesDesviacion {
  codigo?: number;
  codContrato: string;
  tipoPozo: string;
  distHorInicial: number;
  distHorFinal: number;
  categoriaCodigo: string;
  profVertInicial: number;
  profVertFinal: number;
  factorAjuste: number;


  constructor(codigo?: number, codContrato?: string, tipoPozo?: string, distHorInicial?: number, distHorFinal?: number, categoriaCodigo?: string, profVertInicial?: number, profVertFinal?: number, factorAjuste?: number) {
    this.codigo= codigo || null;
    this.codContrato = codContrato || '';
    this.tipoPozo = tipoPozo || '';
    this.distHorInicial = distHorInicial || null;
    this.distHorFinal = distHorFinal || null;
    this.categoriaCodigo = categoriaCodigo || '';
    this.profVertInicial = profVertInicial || null;
    this.profVertFinal = profVertFinal || null;
    this.factorAjuste = factorAjuste || null;
  }
}
// responses
export class ResponseContratoPerforacionAjustesDesviacion extends ApiResponse {
  data: ContratoPerforacionAjustesDesviacion;

  constructor(data: ContratoPerforacionAjustesDesviacion) {
    super(data);
  }
}
export class ResponseContratoPerforacionAjustesDesviaciones extends ApiResponse {
  data: ContratoPerforacionAjustesDesviacion[];

  constructor(data: ContratoPerforacionAjustesDesviacion[]) {
    super(data);
  }
}
