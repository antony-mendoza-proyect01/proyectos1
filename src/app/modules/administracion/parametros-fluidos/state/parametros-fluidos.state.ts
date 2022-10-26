import {Fluidos} from '../../../../data/models/fluidos';


export interface ParametrosFluidosState {
  loading: boolean,
  action: boolean,
  error: string;
  fluidos: Fluidos[];
  fluidosFiltro: Fluidos[];
  edit: Fluidos;
  column: any;
  direction: any;
  paginator: number;
}
