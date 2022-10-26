import {ContratoPerforacionAjustesRecuperacion} from "../../../../../data/models/ajustes-porcentaje-recuperacion";


export interface ParametrosContratoPerforacionAjustesRecuperacionState {
  loading: boolean,
  action: boolean,
  error: string;
  contratosRecuperacion: ContratoPerforacionAjustesRecuperacion[];
  contratosRecuperacionFiltro: ContratoPerforacionAjustesRecuperacion[];
  edit: ContratoPerforacionAjustesRecuperacion;
  column: any;
  direction: any;
  paginator: number;
  codContrato: string;
  tipoPozo: string;
}
