import {ApiResponse} from './api-response';
// model
export class Equipos {
  id?: number;
  codigo: string;
  equipo: string;


  constructor(codigo?: string, equipo?: string) {

    this.codigo = codigo || '';
    this.equipo = equipo || '';


  }
}
// responses
export class ResponseEquipo extends ApiResponse {
  data: Equipos;

  constructor(data: Equipos) {
    super(data);
  }
}
export class ResponseEquipos extends ApiResponse {
  data: Equipos[];

  constructor(data: Equipos[]) {
    super(data);
  }
}
