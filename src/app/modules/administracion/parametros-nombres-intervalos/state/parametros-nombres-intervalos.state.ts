import {NombresIntervalos} from '../../../../data/models/nombres-intervalos';

export interface ParametrosNombresIntervalosState {
  loading: boolean,
  action: boolean,
  error: string;
  nombresIntervalos: NombresIntervalos[];
  nombresIntervalosFiltro: NombresIntervalos[];
  edit: NombresIntervalos;
  column: any;
  direction: any;
  paginator: number;
  page: number;
  paginatorSize: number;
  filtro: string;
}
