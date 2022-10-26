import {ApiResponse} from './api-response';
// model
export class DipmeterPK {
  codPozo: string;
  profundidad: number;

  constructor(codPozo?: string, profundidad?: number) {
    this.codPozo = codPozo ||  '';
    this.profundidad = profundidad || 0;
  }
}

export class Dipmeter {
  dipmeterPK: DipmeterPK;
  azimut: number;
  buzamiento: number;

  constructor(dipmeterPK?: DipmeterPK, azimut?: number, buzamiento?: number) {
    this.dipmeterPK = dipmeterPK || new DipmeterPK();
    this.azimut = azimut || 0;
    this.buzamiento = buzamiento || 0;
  }
}
// responses
export class ResponseDipmeter extends ApiResponse {
  data: Dipmeter;

  constructor(data: Dipmeter) {
    super(data);
  }
}
export class ResponseDipmeters extends ApiResponse {
  data: ResponseDataDipmeters;

  constructor(data: ResponseDataDipmeters) {
    super(data);
  }
}
export class ResponseDataDipmeters {
  dipmeterList : Dipmeter[]
  profundidadRegistro : number;

  constructor(dipmeterList: Dipmeter[], profundidadRegistro: number) {
    this.dipmeterList = dipmeterList;
    this.profundidadRegistro = profundidadRegistro;
  }
}
