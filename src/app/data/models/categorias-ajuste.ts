import {ApiResponse} from './api-response';
// model
export class CategoriasAjuste {
  codigo: string;
  orden: string;
  categoria: string;


  constructor(codigo?: string, orden?: string, categoria?: string) {
    this.codigo = codigo || '';
    this.orden = orden || '';
    this.categoria = categoria || '';
  }
}
// responses
export class ResponseCategoriasAjuste extends ApiResponse {
  data: CategoriasAjuste;

  constructor(data: CategoriasAjuste) {
    super(data);
  }
}
export class ResponseCategoriasAjustes extends ApiResponse {
  data: CategoriasAjuste[];

  constructor(data: CategoriasAjuste[]) {
    super(data);
  }
}
