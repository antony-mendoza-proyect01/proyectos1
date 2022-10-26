import {ApiResponse} from './api-response';
import {Superficies} from './superficie';
import {DescripcionRipios} from './descripcion-ripios';

export class GraficaDescipcionRipios {
  ripios: DescripcionRipios[];
  superficies: Superficies[];
  profundidadRegistro: number;

  constructor( ripios?: DescripcionRipios[],
              superficies?: Superficies[], profundidadRegistro? : number) {
    this.ripios = ripios || [];
    this.superficies = superficies || [];
    this.profundidadRegistro = profundidadRegistro || 0;
  }
}
// responses
export class ResponseGraficaDescipcionRipio extends ApiResponse {
  data: GraficaDescipcionRipios;

  constructor(data: GraficaDescipcionRipios) {
    super(data);
  }
}
export class ResponseGraficaDescipcionRipioss extends ApiResponse {
  data: GraficaDescipcionRipios[];

  constructor(data: GraficaDescipcionRipios[]) {
    super(data);
  }
}
