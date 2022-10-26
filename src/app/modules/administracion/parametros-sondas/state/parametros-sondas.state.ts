import {Sondas} from "../../../../data/models/sondas";


export interface ParametrosSondasState {
  loading: boolean,
  action: boolean,
  error: string;
  sondas: Sondas[];
  sondasFiltro: Sondas[];
  edit: Sondas;
  column: any;
  direction: any;
  paginator: number;
}
