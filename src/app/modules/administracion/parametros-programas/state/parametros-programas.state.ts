import {Programas} from "../../../../data/models/programas";


export interface ParametrosProgramasState {
  loading: boolean,
  action: boolean,
  error: string;
  programas: Programas[];
  programasFiltro: Programas[];
  edit: Programas;
  column: any;
  direction: any;
  paginator: number;
}
