import {ApiResponse} from './api-response';
// model
export class LitofacieColores {

  litofacie: string;
  r: number;
  g: number;
  b: number;


  constructor(litofacie?: string, r?: number,  g?: number,  b?: number) {

    this.litofacie = litofacie || '';
    this.r = r || 255;
    this.r = g || 255;
    this.r = b || 255;


  }
}
// responses
export class ResponseLitofacieColor extends ApiResponse {
  data: LitofacieColores;

  constructor(data: LitofacieColores) {
    super(data);
  }
}
export class ResponseLitofacieColores extends ApiResponse {
  data: LitofacieColores[];

  constructor(data: LitofacieColores[]) {
    super(data);
  }
}
