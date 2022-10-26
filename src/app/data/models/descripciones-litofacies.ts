import {ApiResponse} from './api-response';
// model
export class DescripcionesLitofacies {
  id?: number;
  grupo: string;
  caracteristicas: string;


  constructor(codigo?: string, descripcion?: string, ) {
    this.grupo = codigo || '' ;
    this.caracteristicas = descripcion || '';

  }
}
// responses
export class ResponseDescripcionesLitofacie extends ApiResponse {
  data: DescripcionesLitofacies;

  constructor(data: DescripcionesLitofacies) {
    super(data);
  }
}
export class ResponseDescripcionesLitofacies extends ApiResponse {
  data: DescripcionesLitofacies[];

  constructor(data: DescripcionesLitofacies[]) {
    super(data);
  }
}
