import {ApiResponse} from './api-response';
import {DescripcionNucleos} from './descripcion-nucleos';
import {Superficies} from './superficie';


export class GraficasDescripcionNucleos {
  nucleos: DescripcionNucleos[];
  intervalos: IntervalosDescripcionNucleos[];
  superficies: Superficies[];
  profundidadRegistro: number;

  constructor(nucleos?: DescripcionNucleos[], intervalos?: IntervalosDescripcionNucleos[],
              superficies?: Superficies[], profundidadRegistro? : number) {
    this.nucleos = nucleos || [];
    this.intervalos = intervalos || [];
    this.superficies = superficies || [];
    this.profundidadRegistro = profundidadRegistro || 0;
  }
}
// responses
export class ResponseGraficaDescripcionNucleo extends ApiResponse {
  data: GraficasDescripcionNucleos;

  constructor(data: GraficasDescripcionNucleos) {
    super(data);
  }
}
export class ResponseGraficaDescripcionNucleos extends ApiResponse {
  data: GraficasDescripcionNucleos[];

  constructor(data: GraficasDescripcionNucleos[]) {
    super(data);
  }
}


export class IntervalosDescripcionNucleos {
  desde: number;
  hasta: number;
  nombre: string;
}

