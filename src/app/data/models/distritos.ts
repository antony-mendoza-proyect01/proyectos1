import {ApiResponse} from './api-response';
// model
export class Distritos {

  codDto: string;
  distrito: string;


  constructor(codDto?: string, distrito?: string) {

    this.codDto = codDto || '';
    this.distrito = distrito || '';


  }
}
// responses
export class ResponseDistrito extends ApiResponse {
  data: Distritos;

  constructor(data: Distritos) {
    super(data);
  }
}
export class ResponseDistritos extends ApiResponse {
  data: Distritos[];

  constructor(data: Distritos[]) {
    super(data);
  }
}
