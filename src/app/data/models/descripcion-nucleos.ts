import {ApiResponse} from './api-response';

export class DescripcionNucleos {
  buzamiento_Laminacion?: any;
  litofacie: string;
  r: number;
  buzamiento?: any;
  meteorizacion: string;
  origen: string;
  codnucleo: number;
  recuperado: number;
  diaclasas?: any;
  litologia: string;
  coddessed?: any;
  coddestec?: any;
  codespaciamiento?: any;
  codparasec: number;
  codtectipo?: any;
  desde: number;
  hasta: number;
  b: number;
  g: number;


  // objetos edit
  posicion?: number;

  // constructor(codnucleo: number, desde: number, hasta: number,
  //             recuperado: number, nombre: any, litofacie: string,
  //             buzamiento: any, diaclasas: any, litofacieL: any, buzamientoLaminacion: any,
  //             coddessed: any, coddestec: any, codespaciamiento: any, codlitologia: Litologias,
  //             codmeteorizacion: string, codorigen: string, codparasec: string, codpozo: string,
  //             codtectipo: any) {
  //   this.codnucleo = codnucleo;
  //   this.desde = desde;
  //   this.hasta = hasta;
  //   this.recuperado = recuperado;
  //   this.nombre = nombre;
  //   this.litofacie = litofacie;
  //   this.buzamiento = buzamiento;
  //   this.diaclasas = diaclasas;
  //   this.litofacieL = litofacieL;
  //   this.buzamientoLaminacion = buzamientoLaminacion;
  //   this.coddessed = coddessed;
  //   this.coddestec = coddestec;
  //   this.codespaciamiento = codespaciamiento;
  //   this.codlitologia = codlitologia;
  //   this.codmeteorizacion = codmeteorizacion;
  //   this.codorigen = codorigen;
  //   this.codparasec = codparasec;
  //   this.codpozo = codpozo;
  //   this.codtectipo = codtectipo;
  // }
}

// responses
export class ResponseDescripcionNucleo extends ApiResponse {
  data: DescripcionNucleos;

  constructor(data: DescripcionNucleos) {
    super(data);
  }
}
export class ResponseDescripcionNucleos extends ApiResponse {
  data: DescripcionNucleos[];

  constructor(data: DescripcionNucleos[]) {
    super(data);
  }
}



export class  ReglaLength {
  altura: number;
}
