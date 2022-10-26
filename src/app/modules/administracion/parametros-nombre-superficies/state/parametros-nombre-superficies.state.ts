import { NombreSuperficies } from 'src/app/data/models/nombre-superficies';

export interface ParametrosNombreSuperficiesState {
  loading: boolean,
  action: boolean,
  error: string;
  nombres: NombreSuperficies[];
  nombresFiltro: NombreSuperficies[];
  edit: NombreSuperficies;
  column: any;
  direction: any;
  paginator: number;
}
