import {ContratoPerforacionAjustesDesviacion} from "../../../../../data/models/ajustes-desviacion";
import {CategoriasAjuste} from '../../../../../data/models/categorias-ajuste';


export interface ParametrosContratoPerforacionAjustesDesviacionState {
  loading: boolean,
  action: boolean,
  error: string;
  contratosAjutesDesviacion: ContratoPerforacionAjustesDesviacion[];
  contratosAjutesDesviacionFiltro: ContratoPerforacionAjustesDesviacion[];
  edit: ContratoPerforacionAjustesDesviacion;
  column: any;
  direction: any;
  paginator: number;
  codContrato: string;
  tipoPozo: string;
  categoriasAjustes: CategoriasAjuste[];
}
