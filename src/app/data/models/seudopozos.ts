import {ApiResponse} from './api-response';

export class SeudoPozoResponseData {
  seudopozoList: Seudopozo[];
  seudopozoInfo: SeudopozoInfo;
}

export class SeudopozoInfo {
  profundidad_planeada: number;
  desviacion_promedio: number;
  tipo_pozo: string;
  elevacion: number;
  norte_planeado: number;
  buzamiento_promedio: number;
  este_planeado: number;
  area: string;
}

export class Seudopozo {
  espesor_desviado: number;
  fecha_ingreso: string;
  hasta_desviado: number;
  desde_desviado: number;
  espesor: number;
  manto: string;
  desde: number;
  hasta: number;

  posicion?: number;
}

export class SeudoPozoResponse extends ApiResponse {
  data: SeudoPozoResponseData;

  constructor(data: SeudoPozoResponse) {
    super(data);
  }
}
