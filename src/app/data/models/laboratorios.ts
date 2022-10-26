import {ApiResponse} from './api-response';
// model
export class Laboratorios {

  codLab: string;
  laboratorio: string;


  constructor(codLab?: string, laboratorio?: string) {

    this.codLab = codLab || '';
    this.laboratorio = laboratorio || '';


  }
}
// responses
export class ResponseLaboratorio extends ApiResponse {
  data: Laboratorios;

  constructor(data: Laboratorios) {
    super(data);
  }
}
export class ResponseLaboratorios extends ApiResponse {
  data: Laboratorios[];

  constructor(data: Laboratorios[]) {
    super(data);
  }
}
