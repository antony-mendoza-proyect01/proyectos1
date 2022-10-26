import {ApiResponse} from './api-response';
// model
export class Colores {
  codColor: string;
  color: string;


  constructor(codColor?: string, color?: string) {

    this.codColor = codColor || null;
    this.color = color || '';


  }
}
// responses
export class ResponseColor extends ApiResponse {
  data: Colores;

  constructor(data: Colores) {
    super(data);
  }
}
export class ResponseColores extends ApiResponse {
  data: Colores[];

  constructor(data: Colores[]) {
    super(data);
  }
}
