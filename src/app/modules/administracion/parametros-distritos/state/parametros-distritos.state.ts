import { Distritos } from 'src/app/data/models/distritos';


export interface ParametrosDistritosState {
  loading: boolean,
  action: boolean,
  error: string;
  distritos: Distritos[];
  distritosFiltro: Distritos[];
  edit: Distritos;
  column: any;
  direction: any;
  paginator: number;
}
