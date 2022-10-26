import {ApiResponse} from './api-response';
// model
export class Litologias {

  codLitologia: string;
  litologia:string;
  r: number;
  g: number;
  b: number;

  constructor(codLitologia?: string,litologia?:string, r?: number,  g?: number,  b?: number,  ) {
    this.codLitologia = codLitologia || '';
    this.litologia = litologia || '';
    this.r = r || 255;
    this.r = g || 255;
    this.r = b || 255;
  }
}
// responses
export class ResponseLitologia extends ApiResponse {
  data: Litologias;

  constructor(data: Litologias) {
    super(data);
  }
}
export class ResponseLitologias extends ApiResponse {
  data: Litologias[];

  constructor(data: Litologias[]) {
    super(data);
  }
}
