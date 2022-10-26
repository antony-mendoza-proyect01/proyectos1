import { Durezas } from 'src/app/data/models/durezas';

export interface ParametrosDurezasState {
  loading: boolean,
  action: boolean,
  error: string;
  durezas: Durezas[];
  durezasFiltro: Durezas[];
  edit: Durezas;
  column: any;
  direction: any;
  paginator: number;
}
