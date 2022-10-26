
import {Meteorizaciones} from "../../../../data/models/meterorizaciones";


export interface ParametrosMeteorizacionesState {
  loading: boolean,
  action: boolean,
  error: string;
  meteorizaciones: Meteorizaciones[];
  meteorizacionesFiltro: Meteorizaciones[];
  edit: Meteorizaciones;
  column: any;
  direction: any;
  paginator: number;
}
