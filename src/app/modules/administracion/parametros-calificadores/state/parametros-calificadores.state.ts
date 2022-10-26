import { Calificadores } from 'src/app/data/models/calificadores';


export interface ParametrosCalificadoresState {
  loading: boolean,
  action: boolean,
  error: string;
  calificadores: Calificadores[];
  calificadoresFiltro: Calificadores[];
  edit: Calificadores;
  column: any;
  direction: any;
  paginator: number;
}
