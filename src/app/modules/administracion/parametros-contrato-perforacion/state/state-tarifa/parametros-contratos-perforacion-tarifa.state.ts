import { Tarifas } from 'src/app/data/models/tarifas';


export interface ParametrosContratoPerforacionTarifaState {
  loading: boolean,
  action: boolean,
  error: string;
  contratosPerforacionTarifa: Tarifas[];
  contratosPerforacionTarifaFiltro: Tarifas[];
  edit: Tarifas;
  column: any;
  direction: any;
  paginator: number;
  codContrato: string;
  tipoPozo: string;
}
