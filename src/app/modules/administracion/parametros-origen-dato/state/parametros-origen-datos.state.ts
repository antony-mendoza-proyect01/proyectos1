import { OrigenDatos } from 'src/app/data/models/origen-datos';

export interface ParametrosOrigenDatosState {
  loading: boolean,
  action: boolean,
  error: string;
  origendatos: OrigenDatos[];
  origendatosFiltro: OrigenDatos[];
  edit: OrigenDatos;
  column: any;
  direction: any;
  paginator: number;
}
