import {TipoPerforaciones} from "../../../../data/models/tipo-perforaciones";


export interface ParametrosTipoPerforacionesState {
  loading: boolean,
  action: boolean,
  error: string;
  perforaciones: TipoPerforaciones[];
  perforacionesFiltro: TipoPerforaciones[];
  edit: TipoPerforaciones;
  column: any;
  direction: any;
  paginator: number;
}
