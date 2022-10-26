import {ApiResponse} from './api-response';
// model
export class TarifasRegistro {
  tarifaRegistroPK: TarifasRegistroFK;
  metros: number;
  valSetup: number;
  restarWater: number;
  restarCasing: number;


  constructor(tarifaRegistroPK?: TarifasRegistroFK, metros?: number, valSetup?: number,
              restarWater?: number, restarCasing?: number) {
    this.tarifaRegistroPK = tarifaRegistroPK || new TarifasRegistroFK();
    this.metros = metros || 0;
    this.valSetup = valSetup || 0;
    this.restarWater = restarWater || 0;
    this.restarCasing = restarCasing || 0;
  }
}
// responses
export class ResponseTarifasRegistro extends ApiResponse {
  data: TarifasRegistro;

  constructor(data: TarifasRegistro) {
    super(data);
  }
}
export class ResponseTarifasRegistros extends ApiResponse {
  data: TarifasRegistro[];

  constructor(data: TarifasRegistro[]) {
    super(data);
  }
}

export class TarifasRegistroFK {
  contrato: string;
  sonda: string;
  tipoPozo: string;

  constructor(contrato?: string, sonda?: string, tipoPozo?: string) {
    this.contrato = contrato || '';
    this.sonda = sonda || '';
    this.tipoPozo = tipoPozo || '';
  }
}
