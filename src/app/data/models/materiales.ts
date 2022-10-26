import {ApiResponse} from './api-response';
// model
export class Materiales {
  id?: number;
  codigo: string;
  material: string;


  constructor(codigo?: string, material?: string) {
    this.codigo = codigo || '';
    this.material = material || '';
  }
}
// responses
export class ResponseMaterial extends ApiResponse {
  data: Materiales;

  constructor(data: Materiales) {
    super(data);
  }
}
export class ResponseMateriales extends ApiResponse {
  data: Materiales[];

  constructor(data: Materiales[]) {
    super(data);
  }
}
