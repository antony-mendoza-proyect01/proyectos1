import { Granos } from 'src/app/data/models/granos';

export interface ParametrosGranosState {
  loading: boolean,
  action: boolean,
  error: string;
  granos: Granos[];
  granosFiltro: Granos[];
  edit: Granos;
  column: any;
  direction: any;
  paginator: number;
}
