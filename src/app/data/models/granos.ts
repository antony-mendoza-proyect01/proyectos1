import {ApiResponse} from './api-response';
// model
export class Granos {

  codGrano: string;
  grano: string;


  constructor(codGrano?: string, grano?: string) {

    this.codGrano = codGrano || '';
    this.grano = grano || '';


  }
}
// responses
export class ResponseGrano extends ApiResponse {
  data: Granos;

  constructor(data: Granos) {
    super(data);
  }
}
export class ResponseGranos extends ApiResponse {
  data: Granos[];

  constructor(data: Granos[]) {
    super(data);
  }
}
