import {Espaciamiento} from '../../../../data/models/espaciamiento';

export interface ParametrosEspaciamientoState {
  loading: boolean,
  action: boolean,
  error: string;
  espaciamientos: Espaciamiento[];
  espaciamientosFiltro: Espaciamiento[];
  edit: Espaciamiento;
  column: any;
  direction: any;
  paginator: number;
}
