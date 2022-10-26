import {ApiResponse} from './api-response';
// model
export class Parasecuencias {
  codParasec: number;


  constructor(codParasec?: number) {
    this.codParasec = codParasec || null;
  }
}
// responses
export class ResponseParasecuencia extends ApiResponse {
  data: Parasecuencias;

  constructor(data: Parasecuencias) {
    super(data);
  }
}
export class ResponseParasecuencias extends ApiResponse {
  data: Parasecuencias[];

  constructor(data: Parasecuencias[]) {
    super(data);
  }
}
