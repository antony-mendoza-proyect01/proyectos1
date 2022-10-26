// import {ApiResponse} from './api-response';
// import {Dipmeter, DipmeterPK} from "./dipmeter";
// // model
// // export class DatosDelpozoPK {
// //   nombre: string;
// //   checked: string;
// //
// //   constructor(nombre?: string, checked?: string) {
// //     this.nombre = nombre ||  '';
// //     this.checked = checked || '';
// //   }
// // }
//
//
// export class DatosDelPozo {
//   // datosDelpozoPK : DatosDelpozoPK;
//
//   fechaInicio : number;
//   fechaFin : number;
//   fechaActualizado : number;
//   estado : string;
//
//   codTipoPerforacion: string;
//   codDistrito: string;
//   codProvincia: string;
//   codProyecto: string;
//   codLaboratorio: string;
//   codPozo: string;
//
//
//   constructor(fechaInicio?:number,fechaFin?: number,fechaActualizado?: number,estado?:string, codTipoPerforacion?: string, codDistrito?: string,codProvincia?: string, codProyecto?: string,codLaboratorio?: string, codPozo?: string) {
//     // datosDelpozoPK?:DatosDelpozoPK
//     // this.datosDelpozoPK = datosDelpozoPK || new DatosDelpozoPK()
//     this.fechaInicio = fechaInicio || 0;
//     this.fechaFin = fechaFin || 0;
//     this.fechaActualizado = fechaActualizado || 0;
//     this.estado = estado || '';
//
//     this.codTipoPerforacion = codTipoPerforacion || '';
//     this.codDistrito = codDistrito || '';
//     this.codProvincia = codProvincia || '';
//     this.codProyecto = codProyecto || '';
//     this.codLaboratorio = codLaboratorio || '';
//     this.codPozo = codPozo || '';
//
//   }
// }
// // responses
// export class ResponseDatosDelPozo extends ApiResponse {
//   data: DatosDelPozo;
//
//   constructor(data: DatosDelPozo) {
//     super(data);
//   }
// }
// export class ResponseDatosDelPozos extends ApiResponse {
//   data: ResponseDataDatosDelPozo;
//
//   constructor(data: ResponseDataDatosDelPozo) {
//     super(data);
//   }
//
//
// }
// export class ResponseDataDatosDelPozo {
//   tipoRegistro : number;
//   tiposRegistro : DatosDelPozo[]
//
//   constructor(tiposRegistro : DatosDelPozo[], tipoRegistro: number) {
//     this.tiposRegistro = tiposRegistro;
//     this.tipoRegistro = tipoRegistro;
//   }
// }
