export class IGraficas {
  nucleos: INucleos[];
  intervalos: IIntervalos[];
  superficies: ISuperficies[];
}

export interface INucleos {
  codnucleo: number;
  desde: number;
  hasta: number;
  recuperado: number;
  nombre?: any;
  litofacie: string;
  buzamiento?: any;
  diaclasas?: any;
  litofacieL?: any;
  buzamientoLaminacion?: any;
  coddessed?: any;
  coddestec?: any;
  codespaciamiento?: any;
  codlitologia: IDatosDataNucleosCodlitologia;
  codmeteorizacion: string;
  codorigen: string;
  codparasec: string;
  codpozo: string;
  codtectipo?: any;
}

export interface IDatosDataNucleosCodlitologia {
  codLitologia: string;
  litologia: string;
  r: number;
  g: number;
  b: number;
}

export interface IIntervalos {
  desde: number;
  hasta: number;
  nombre: string;
}

export interface ISuperficies {
  nombre: string;
  r: number;
  profundidad: number;
  b: number;
  g: number;
}
