// interface de las variables
import { Dipmeter } from 'src/app/data/models/dipmeter';

export interface DipmeterState {
  loading: boolean;
  action: boolean;
  error?: string | null;
  dipmeters: Dipmeter[];
  dipmetersFiltro: Dipmeter[];
  edit: Dipmeter;
  column: any;
  direction: any;
  paginator: number;
  profundidadExistente: number;
}




