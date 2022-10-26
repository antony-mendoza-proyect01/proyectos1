import {ApiResponse} from "./api-response";

export class ResultDatosPozo {
  datosPozo: DatosPozo;
  area: string;
  tiposRegistro: TiposRegistro[];
}
export class TiposRegistro {
  nombre: string;
  checked: boolean;
}

export class DatosPozoDistrito {
  codDto: string;
  distrito: string;
}
export class DatosPozoProvincia {
  codProv: string;
  provincia: string;
}
export class DatosPozoLaboratorio {
  codLab: string;
  laboratorio: string;
}
export class DatosPozoTipoPerforacion {
  codTipoPerforacion: string;
  perforacion: string;
}
export class DatosPozo {
  codPozo: string;
  fechaInicio: string;
  fechaFin: string;
  fechaActualizado: string;
  estado: string;
  codProyecto: string;
  distrito: DatosPozoDistrito;
  provincia: DatosPozoProvincia;
  laboratorio: DatosPozoLaboratorio;
  tipoPerforacion: DatosPozoTipoPerforacion;
}

//response
export class ResponseDatosDelPozo extends ApiResponse {
  data: ResultDatosPozo;

  constructor(data: ResponseDatosDelPozo) {
    super(data);
  }
}
