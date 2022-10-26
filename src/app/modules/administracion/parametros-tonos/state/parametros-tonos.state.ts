
import {Tonos} from "../../../../data/models/tono";


export interface ParametrosTonosState {
  loading: boolean,
  action: boolean,
  error: string;
  tonos: Tonos[];
  tonosFiltro: Tonos[];
  edit: Tonos;
  column: any;
  direction: any;
  paginator: number;
}
