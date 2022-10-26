import { Parasecuencias } from 'src/app/data/models/parasecuencias';

export interface ParametrosParasecuenciasState {
  loading: boolean,
  action: boolean,
  error: string;
  parasecuencias: Parasecuencias[];
  parasecuenciasFiltro: Parasecuencias[];
  edit: Parasecuencias;
  column: any;
  direction: any;
  paginator: number;
}
