import {Caudales} from '../../../../data/models/caudales';


export interface ParametrosCaudalesState {
  loading: boolean,
  action: boolean,
  error: string;
  caudales: Caudales[];
  caudalesFiltro: Caudales[];
  edit: Caudales;
  column: any;
  direction: any;
  paginator: number;
}
