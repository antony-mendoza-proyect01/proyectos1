import {ContratoPerforacionAjustesRegistro} from "../../../../../data/models/ajustes-porcentaje-verticalidad";


export interface ParametrosContratoPerforacionAjustesRegistroState {
  loading: boolean,
  action: boolean,
  error: string;
  contratosRegistro: ContratoPerforacionAjustesRegistro[];
  contratosRegistroFiltro: ContratoPerforacionAjustesRegistro[];
  edit: ContratoPerforacionAjustesRegistro;
  column: any;
  direction: any;
  paginator: number;
  codContrato: string;
  tipoPozo: string;
}
