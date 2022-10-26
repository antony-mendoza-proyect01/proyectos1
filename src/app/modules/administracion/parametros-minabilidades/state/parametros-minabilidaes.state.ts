import { Minabilidades } from 'src/app/data/models/minabilidades';


export interface ParametrosMinabilidaesState {
  loading: boolean,
  action: boolean,
  error: string;
  minabilidades: Minabilidades[];
  minabilidadesFiltro: Minabilidades[];
  edit: Minabilidades;
  column: any;
  direction: any;
  paginator: number;
}
