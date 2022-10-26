import {ApiResponse} from './api-response';
// model
export class Turnos {
  id?: number;
  codigo: string;
  turno: string;


  constructor(codigo?: string, turno?: string) {

    this.codigo = codigo || '';
    this.turno = turno || '';


  }
}
// responses
export class ResponseTurno extends ApiResponse {
  data: Turnos;

  constructor(data: Turnos) {
    super(data);
  }
}
export class ResponseTurnos extends ApiResponse {
  data: Turnos[];

  constructor(data: Turnos[]) {
    super(data);
  }
}
