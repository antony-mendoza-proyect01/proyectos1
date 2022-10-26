import { Turnos } from "src/app/data/models/turnos";



export interface ParametrosTurnosState {
  loading: boolean,
  action: boolean,
  error: string;
  turnos: Turnos[];
  turnosFiltro: Turnos[];
  edit: Turnos;
  column: any;
  direction: any;
  paginator: number;
}
