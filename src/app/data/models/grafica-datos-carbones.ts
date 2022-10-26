import {ApiResponse} from './api-response';
import {DescripcionNucleos} from './descripcion-nucleos';
import {DatosCarbon} from './datos-carbon';
import {Superficies} from './superficie';

export class GraficaDatosCarbones {
  ripios: NucleosDatosCarbones[];
  nucleos: NucleosDatosCarbones[];
  intervalos: DatosCarbon[];
  superficies: Superficies[];
  profundidadRegistro: number;


  constructor(nucleos?: DescripcionNucleos[], intervalos?: DatosCarbon[],
              superficies?: Superficies[], profundidadRegistro? : number) {
    this.nucleos = nucleos || [];
    this.ripios = nucleos || [];
    this.intervalos = intervalos || [];
    this.superficies = superficies || [];
    this.profundidadRegistro = profundidadRegistro || 0;
  }
}
// responses
export class ResponseGraficaDatosCarbone extends ApiResponse {
  data: GraficaDatosCarbones;

  constructor(data: GraficaDatosCarbones) {
    super(data);
  }
}
export class ResponseGraficaDatosCarbones extends ApiResponse {
  data: GraficaDatosCarbones[];

  constructor(data: GraficaDatosCarbones[]) {
    super(data);
  }
}


export class NucleosDatosCarbones {
  r: number;
  desde: number;
  hasta: number;
  b: number;
  g: number;
}

