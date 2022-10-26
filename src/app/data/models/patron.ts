import {ApiResponse} from './api-response';
// model
export class Patron {
  codPatron: number;
  codigo: string;
  patron: string;


  constructor(codPatron?: number, codigo?: string, patron?: string) {
    this.codPatron = codPatron || null;
    this.codigo = codigo || '';
    this.patron = patron || '';


  }
}
// responses
export class ResponsePatron extends ApiResponse {
  data: Patron;

  constructor(data: Patron) {
    super(data);
  }
}
export class ResponsePatrones extends ApiResponse {
  data: Patron[];

  constructor(data: Patron[]) {
    super(data);
  }
}
