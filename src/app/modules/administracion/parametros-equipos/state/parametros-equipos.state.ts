import { Equipos } from 'src/app/data/models/equipos';


export interface ParametrosEquiposState {
  loading: boolean,
  action: boolean,
  error: string;
  equipos: Equipos[];
  equiposFiltro: Equipos[];
  edit: Equipos;
  column: any;
  direction: any;
  paginator: number;
}
