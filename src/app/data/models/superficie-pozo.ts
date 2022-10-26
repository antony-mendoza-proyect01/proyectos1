import {ApiResponse} from './api-response';
// model
export class SuperficiePozo {
  codSupPozo?: number;
  codPozo: string;
  nombreSuperficie: string;
  profundidad: number;


  constructor( codSupPozo?: number, codPozo?: string, nombreSuperficie?: string, profundidad?: number,) {
    this.codSupPozo = codSupPozo || null;
    this.codPozo = codPozo || '';
    this.nombreSuperficie = nombreSuperficie || '';
    this.profundidad = profundidad || null;

  }
}
// responses
export class ResponseSuperficiePozo extends ApiResponse {
  data: SuperficiePozo;

  constructor(data: SuperficiePozo) {
    super(data);
  }
}
export class ResponseSuperficiePozos extends ApiResponse {
  data: SuperficiePozo[];

  constructor(data: SuperficiePozo[]) {
    super(data);
  }
}
export class ResponseSuperficiePozoDetail extends ApiResponse {
  data: ResponseSuperficiePozoDetailRGB;

  constructor(data: ResponseSuperficiePozoDetailRGB) {
    super(data);
  }
}
export class ResponseSuperficiePozoDetailRGB extends ApiResponse {
  superficiePozo: SuperficiePozo;
  superficiePozoRgb: Rgb;

  constructor(data: SuperficiePozo) {
    super(data);
  }
}


export class  Rgb {
  r?: number;
  g?: number;
  b?: number;
}
