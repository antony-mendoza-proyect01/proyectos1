import { TipoPozos } from 'src/app/data/models/tipo-pozos';



export interface ParametrosTipoPozosState {
  loading: boolean,
  action: boolean,
  error: string;
  tipopozos: TipoPozos[];
  tipopozosFiltro: TipoPozos[];
  edit: TipoPozos;
  column: any;
  direction: any;
  paginator: number;
  tipopozosSelected: TipoPozos;
}
