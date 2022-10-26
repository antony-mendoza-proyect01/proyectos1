import {ApiResponse} from './api-response';
// model
export class DescripcionSedimentaria {
  codDesSed:  number;
  descripcion: string;

  constructor(codDesSed?: number, descripcion?: string, ) {
    this.codDesSed = codDesSed || null ;
    this.descripcion = descripcion || '';
  }
}
// responses
export class ResponseDescipcionSedimentaria extends ApiResponse {
  data: DescripcionSedimentaria;

  constructor(data: DescripcionSedimentaria) {
    super(data);
  }
}
export class ResponseDescipcionSedimentarias extends ApiResponse {
  data: DescripcionSedimentaria[];

  constructor(data: DescripcionSedimentaria[]) {
    super(data);
  }
}
