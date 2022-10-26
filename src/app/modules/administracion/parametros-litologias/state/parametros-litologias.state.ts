import { Litologias } from 'src/app/data/models/litologias';


export interface ParametrosLitologiasState {
  loading: boolean,
  action: boolean,
  error: string;
  litologias: Litologias[];
  litologiasFiltro: Litologias[];
  edit: Litologias;
  column: any;
  direction: any;
  paginator: number;
}
