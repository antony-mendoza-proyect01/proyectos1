import {ApiResponse} from './api-response';
// model
export class CodigosProyectos {
  id?: number;
  codProyecto: string;


  constructor(codProyecto?: string) {

    this.codProyecto = codProyecto || '';



  }
}
// responses
export class ResponseCodigoProyecto extends ApiResponse {
  data: CodigosProyectos;

  constructor(data: CodigosProyectos) {
    super(data);
  }
}
export class ResponseCodigosProyectos extends ApiResponse {
  data: CodigosProyectos[];

  constructor(data: CodigosProyectos[]) {
    super(data);
  }
}
