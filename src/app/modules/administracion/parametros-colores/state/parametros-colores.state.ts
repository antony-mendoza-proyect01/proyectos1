import { Colores } from 'src/app/data/models/colores';

export interface ParametrosColoresState {
  loading: boolean,
  action: boolean,
  error: string;
  colores: Colores[];
  coloresFiltro: Colores[];
  edit: Colores;
  column: any;
  direction: any;
  paginator: number;
}
